const express = require('express');
const { exec } = require('child_process');
require('dotenv').config({ path: __dirname + '/.env' });
const cors = require('cors');
const app = express();
const rateLimit = require('express-rate-limit');

const isWindows = process.platform === 'win32';

const dbPath = "/var/lib/firebird/data/visitor_counter.fdb";
const auth = `-user sysdba -password '${process.env.DB_PASSWORD}'`;

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 10, 
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true, 
    legacyHeaders: false, 
});

const runSql = (query) => {
    return new Promise((resolve, reject) => {
        const cmd = `echo "${query} COMMIT; QUIT;" | isql-fb ${dbPath} ${auth}`;
        exec(cmd, (error, stdout, stderr) => {
            if (error) reject(stderr);
            else resolve(stdout);
        });
    });
};

const allowedOrigins = ['https://sheasyve.dev'];
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like strict mobile browsers) or if in the allowlist
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(limiter);

app.get('/api/count', (req, res) => {
    if (isWindows) return res.json({ count: 42 });

    const query = "SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;";
    const cmd = `echo "${query} QUIT;" | isql-fb ${dbPath} ${auth}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        const matches = stdout.match(/\d+/g);
        res.json({ count: matches ? parseInt(matches[matches.length - 1], 10) : 0 });
    });
});

app.post('/api/increment', async (req, res) => {
    app.set('trust proxy', true);
    const ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    let sanitizedIp = ip ? ip.replace(/[^a-zA-Z0-9.:]/g, '') : '127.0.0.1';
    console.log(`\n--- VISITOR HIT FROM: ${sanitizedIp} ---`);

    // IP Obfuscation
    if (sanitizedIp.includes('.')) {
        // IPv4: keep first 3 octets
        sanitizedIp = sanitizedIp.substring(0, sanitizedIp.lastIndexOf('.')) + '.0';
    } else if (sanitizedIp.includes(':')) {
        // IPv6: keep the first 4 parts of the address
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

app.listen(3001, () => console.log('API server running on port 3001'));