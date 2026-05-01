const express = require('express');
const { exec } = require('child_process');
require('dotenv').config();
const cors = require('cors'); 
const app = express();

// Check if running on Window
const isWindows = process.platform === 'win32';

const dbPath = "localhost:/var/lib/firebird/data/visitor_counter.fdb";
const auth = `-user sysdba -password '${process.env.DB_PASSWORD}'`;

const runSql = (query) => {
    return new Promise((resolve, reject) => {
        const cmd = `isql-fb "${dbPath}" -q <<EOF\n${query}\nQUIT;\nEOF`;
        
        exec(cmd, {
            env: {
                ...process.env,
                ISC_USER: 'sysdba',
                ISC_PASSWORD: process.env.DB_PASSWORD 
            }
        }, (error, stdout, stderr) => {
            if (stderr && stderr.trim().length > 0) {
                console.error(`\n[DB ERROR/WARN]:\n${stderr}`);
            }
            if (error) reject(stderr || error.message);
            else resolve(stdout);
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
        const rawCounter = await runSql("SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;");
        
        // Since -q is active, just find all numbers and grab the last one
        const match = rawCounter.match(/\d+/g);
        
        // If no numbers came back at all, the table is actually empty
        if (!match) {
            await runSql("INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0); COMMIT;");
            return res.json({ count: 0 });
        }

        const currentCount = parseInt(match[match.length - 1], 10);
        res.json({ count: currentCount });
    } catch (err) {
        console.error("GET COUNT ERROR DETAILS:", err);
        res.status(500).json({ error: "Database not initialized" });
    }
});

app.post('/api/increment', async (req, res) => {
    if (isWindows) return res.json({ success: true, newVisitor: true });

    const sanitizedIp = getSanitizedIp(req);
    console.log(`\n--- NEW INCREMENT REQUEST FROM: ${sanitizedIp} ---`);

    try {
        // 1. Ensure the counter record exists
        const rawCounter = await runSql("SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;");
        if (!rawCounter.match(/\d+/)) {
            await runSql("INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0); COMMIT;");
        }

        // 2. Check if the IP exists
        const rawIpCheck = await runSql(`SELECT COUNT(*) FROM UNIQUE_VISITORS WHERE IP_ADDRESS = '${sanitizedIp}';`);
        console.log("[DEBUG] Raw DB Output:\n", rawIpCheck);

        // Grab the numbers from the output
        const countMatch = rawIpCheck.match(/\d+/g); 
        
        // Since -q is on, the last number printed will be the actual COUNT(*) result
        const finalNumberFound = countMatch ? parseInt(countMatch[countMatch.length - 1], 10) : null;
        console.log(`[DEBUG] Final parsed count: ${finalNumberFound}`);

        // If the count is 0, they are a new visitor!
        if (finalNumberFound === 0) {
            await runSql(`INSERT INTO UNIQUE_VISITORS (IP_ADDRESS) VALUES ('${sanitizedIp}'); COMMIT;`);
            await runSql(`UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1; COMMIT;`);
            console.log("[SUCCESS] Inserted new IP and incremented counter.");
            res.json({ success: true, newVisitor: true });
        } else {
            console.log("[SKIPPED] IP already exists.");
            res.json({ success: true, newVisitor: false });
        }
    } catch (err) {
        console.error("INCREMENT ERROR DETAILS:", err);
        res.status(500).json({ error: "Database error" });
    }
});

app.post('/api/clear-visitors', async (req, res) => {
    if (isWindows) return res.json({ success: true, cleared: true });

    try {
        await runSql("DELETE FROM UNIQUE_VISITORS; COMMIT;");
        await runSql("UPDATE COUNTERS SET VISIT_COUNT = 0 WHERE ID = 1; COMMIT;");
        res.json({ success: true, cleared: true });
    } catch (err) {
        console.error("CLEAR ERROR DETAILS:", err);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(3001, () => console.log('API server running on port 3001'));