const express = require('express');
const Firebird = require('node-firebird');
require('dotenv').config({ path: __dirname + '/.env' });
const cors = require('cors'); 
const app = express();

const isWindows = process.platform === 'win32';

// Native driver options - strictly uses TCP port 3050, completely bypassing file locks
const dbOptions = {
    host: '127.0.0.1',
    port: 3050,
    database: '/var/lib/firebird/data/visitor_counter.fdb',
    user: 'sysdba',
    password: process.env.DB_PASSWORD
};

// Clean Promise wrapper for the native driver
const runSql = (query, params = []) => {
    return new Promise((resolve, reject) => {
        Firebird.attach(dbOptions, (err, db) => {
            if (err) return reject(err);
            db.query(query, params, (err, result) => {
                db.detach(); // Always release connection
                if (err) reject(err);
                else resolve(result);
            });
        });
    });
};

app.use(cors());
app.use(express.json());

const getSanitizedIp = (req) => {
    app.set('trust proxy', true);
    let ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    let sanitizedIp = ip ? ip.replace(/[^a-zA-Z0-9.:]/g, '') : '127.0.0.1';

    if (sanitizedIp.includes('.')) {
        return sanitizedIp.substring(0, sanitizedIp.lastIndexOf('.')) + '.0';
    } else if (sanitizedIp.includes(':')) {
        return sanitizedIp.substring(0, sanitizedIp.lastIndexOf(':')) + '::';
    }
    return sanitizedIp;
};

// ==========================================
// Main Endpoints
// ==========================================

app.get('/api/count', async (req, res) => {
    if (isWindows) return res.json({ count: 42 });

    try {
        let result = await runSql("SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1");
        
        // If table is empty
        if (!result || result.length === 0) {
            await runSql("INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0)");
            return res.json({ count: 0 });
        }

        // Return the exact integer directly from the DB object
        res.json({ count: parseInt(result[0].VISIT_COUNT, 10) });
    } catch (err) {
        console.error("\n[GET COUNT ERROR]:", err.message || err);
        res.status(500).json({ error: "Database error" });
    }
});

app.post('/api/increment', async (req, res) => {
    if (isWindows) return res.json({ success: true, newVisitor: true });

    const sanitizedIp = getSanitizedIp(req);
    console.log(`\n--- NEW INCREMENT REQUEST FROM: ${sanitizedIp} ---`);

    try {
        // 1. Ensure counter row exists
        let counterCheck = await runSql("SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1");
        if (!counterCheck || counterCheck.length === 0) {
            await runSql("INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0)");
        }

        // 2. Check if IP exists using safe parameterized queries
        let ipCheck = await runSql("SELECT COUNT(*) FROM UNIQUE_VISITORS WHERE IP_ADDRESS = ?", [sanitizedIp]);
        
        // Extract the count integer safely regardless of what the DB aliases the column as
        let countValue = parseInt(Object.values(ipCheck[0])[0], 10);
        console.log(`[DEBUG] Final parsed count: ${countValue}`);

        if (countValue === 0) {
            await runSql("INSERT INTO UNIQUE_VISITORS (IP_ADDRESS) VALUES (?)", [sanitizedIp]);
            await runSql("UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1");
            console.log("[SUCCESS] Inserted new IP and incremented counter.");
            res.json({ success: true, newVisitor: true });
        } else {
            console.log("[SKIPPED] IP already exists.");
            res.json({ success: true, newVisitor: false });
        }
    } catch (err) {
        console.error("\n[INCREMENT ERROR]:", err.message || err);
        res.status(500).json({ error: "Database error" });
    }
});

app.post('/api/clear-visitors', async (req, res) => {
    if (isWindows) return res.json({ success: true, cleared: true });

    try {
        await runSql("DELETE FROM UNIQUE_VISITORS");
        await runSql("UPDATE COUNTERS SET VISIT_COUNT = 0 WHERE ID = 1");
        res.json({ success: true, cleared: true });
    } catch (err) {
        console.error("\n[CLEAR ERROR]:", err.message || err);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(3001, () => console.log('API server running on port 3001'));