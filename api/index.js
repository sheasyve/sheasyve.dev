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

app.get('/api/count', (req, res) => {
    // If on Windows, just return a fake number so React doesn't break
    if (isWindows) return res.json({ count: 42 });

    const query = "SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;";
    const cmd = `echo "${query}" | isql-fb ${dbPath} ${auth}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        const match = stdout.match(/\d+/);
        res.json({ count: match ? parseInt(match[0], 10) : 0 });
    });
});

app.post('/api/increment', async (req, res) => {

    app.set('trust proxy', true);
    const ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Basic sanitization: Ensure it's a valid IPv4/IPv6 string
    const sanitizedIp = ip.replace(/[^a-zA-Z0-9.:]/g, '');

    try {
        const check = await runSql(`SELECT COUNT(*) FROM UNIQUE_VISITORS WHERE IP_ADDRESS = '${sanitizedIp}';`);
        
        const countMatch = check.match(/(\d+)/);
        if (countMatch && parseInt(countMatch[0], 0) === 0) {
            await runSql(`INSERT INTO UNIQUE_VISITORS (IP_ADDRESS) VALUES ('${sanitizedIp}');`);
            await runSql(`UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1;`);
            res.json({ success: true, newVisitor: true });
        } else {
            res.json({ success: true, newVisitor: false });
        }
    } catch (err) {
        console.error("INCREMENT ERROR DETAILS:", err);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(3001, () => console.log('API server running on port 3001'));