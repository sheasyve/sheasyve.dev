// routes/visitor.js
const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

const isWindows = process.platform === 'win32';
const dbPath = "/var/lib/firebird/data/visitor_counter.fdb";
const auth = `-user sysdba -password '${process.env.DB_PASSWORD}'`;

const runSql = (query) => {
    return new Promise((resolve, reject) => {
        const cmd = `echo "${query} COMMIT; QUIT;" | isql-fb ${dbPath} ${auth}`;
        exec(cmd, (error, stdout, stderr) => {
            if (error) reject(stderr);
            else resolve(stdout);
        });
    });
};

// Maps to /api/count
router.get('/count', (req, res) => {
    if (isWindows) return res.json({ count: 5700000 });

    const query = "SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;";
    const cmd = `echo "${query} QUIT;" | isql-fb ${dbPath} ${auth}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        const matches = stdout.match(/\d+/g);
        res.json({ count: matches ? parseInt(matches[matches.length - 1], 10) : 0 });
    });
});

// Maps to /api/increment
router.post('/increment', async (req, res) => {
    const ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    let sanitizedIp = ip ? ip.replace(/[^a-zA-Z0-9.:]/g, '') : '127.0.0.1';
    console.log(`\n--- VISITOR HIT FROM: ${sanitizedIp} ---`);

    // IP Obfuscation
    if (sanitizedIp.includes('.')) {
        sanitizedIp = sanitizedIp.substring(0, sanitizedIp.lastIndexOf('.')) + '.0';
    } else if (sanitizedIp.includes(':')) {
        const parts = sanitizedIp.split(':');
        if (parts.length > 4) {
            sanitizedIp = parts.slice(0, 4).join(':') + '::';
        }
    }

    try {
        const check = await runSql(`SELECT COUNT(*) FROM UNIQUE_VISITORS WHERE IP_ADDRESS = '${sanitizedIp}';`);
        const matches = check.match(/\d+/g);
        const countValue = matches ? parseInt(matches[matches.length - 1], 10) : null;

        if (countValue === 0) {
            await runSql(`INSERT INTO UNIQUE_VISITORS (IP_ADDRESS) VALUES ('${sanitizedIp}');`);
            await runSql(`UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1;`);
            console.log("[SUCCESS] Incremented Counter!");
            res.json({ success: true, newVisitor: true });
        } else {
            console.log("[SKIPPED] Existing Visitor.");
            res.json({ success: true, newVisitor: false });
        }
    } catch (err) {
        console.error("INCREMENT ERROR DETAILS:", err);
        res.status(500).json({ error: "Database error" });
    }
});

module.exports = router;