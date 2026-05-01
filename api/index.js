const express = require('express');
const { exec } = require('child_process');
require('dotenv').config();
const cors = require('cors'); 
const app = express();

// Check if running on Windows
const isWindows = process.platform === 'win32';

const dbPath = "/var/lib/firebird/data/visitor_counter.fdb";
const auth = `-user sysdba -password '${process.env.DB_PASSWORD}'`;

const runSql = (query) => {
    return new Promise((resolve, reject) => {
        const cmd = `echo "${query}" | isql-fb ${dbPath} ${auth}`;
        exec(cmd, (error, stdout, stderr) => {
            if (error) reject(stderr);
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
        let result = await runSql("SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;");
        let match = result.match(/\d+/);
        
        // If no record exists, create the default counter row
        if (!match) {
            await runSql("INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0); COMMIT;");
            return res.json({ count: 0 });
        }

        res.json({ count: parseInt(match[0], 10) });
    } catch (err) {
        res.status(500).json({ error: "Database not initialized" });
    }
});

app.post('/api/increment', async (req, res) => {
    if (isWindows) return res.json({ success: true, newVisitor: true });

    const sanitizedIp = getSanitizedIp(req);

    try {
        // 1. Ensure the counter record exists before trying to update it
        const counterCheck = await runSql("SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;");
        if (!counterCheck.match(/\d+/)) {
            await runSql("INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0); COMMIT;");
        }

        // 2. Check the unique visitor
        const check = await runSql(`SELECT COUNT(*) FROM UNIQUE_VISITORS WHERE IP_ADDRESS = '${sanitizedIp}';`);
        const countMatch = check.match(/(\d+)/);

        if (countMatch && parseInt(countMatch[0], 10) === 0) {
            await runSql(`INSERT INTO UNIQUE_VISITORS (IP_ADDRESS) VALUES ('${sanitizedIp}'); COMMIT;`);
            await runSql(`UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1; COMMIT;`);
            res.json({ success: true, newVisitor: true });
        } else {
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