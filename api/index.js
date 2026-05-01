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

// Helper function to hash or mask an IP address
const getSanitizedIp = (req) => {
    app.set('trust proxy', true);
    let ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    // Basic sanitization: Ensure it's a valid IPv4/IPv6 string
    let sanitizedIp = ip ? ip.replace(/[^a-zA-Z0-9.:]/g, '') : '127.0.0.1';

    // Mask the IP to anonymize the identifier
    if (sanitizedIp.includes('.')) {
        // IPv4 masking
        return sanitizedIp.substring(0, sanitizedIp.lastIndexOf('.')) + '.0';
    } else if (sanitizedIp.includes(':')) {
        // IPv6 masking
        return sanitizedIp.substring(0, sanitizedIp.lastIndexOf(':')) + '::';
    }
    return sanitizedIp;
};

// ==========================================
// Visitor Tracking & Counting Endpoints
// ==========================================

app.get('/api/count', (req, res) => {
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
    if (isWindows) return res.json({ success: true, newVisitor: true });

    const sanitizedIp = getSanitizedIp(req);

    try {
        const check = await runSql(`SELECT COUNT(*) FROM UNIQUE_VISITORS WHERE IP_ADDRESS = '${sanitizedIp}';`);
        
        const countMatch = check.match(/(\d+)/);
        if (countMatch && parseInt(countMatch[0], 0) === 0) {
            await runSql(`INSERT INTO UNIQUE_VISITORS (IP_ADDRESS) VALUES ('${sanitizedIp}');COMMIT;`);
            await runSql(`UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1;COMMIT;`);
            res.json({ success: true, newVisitor: true });
        } else {
            res.json({ success: true, newVisitor: false });
        }
    } catch (err) {
        console.error("INCREMENT ERROR DETAILS:", err);
        res.status(500).json({ error: "Database error" });
    }
});

// Endpoint to clear all unique visitors
app.post('/api/clear-visitors', async (req, res) => {
    if (isWindows) return res.json({ success: true, cleared: true });

    try {
        await runSql(`DELETE FROM UNIQUE_VISITORS;COMMIT;`);
        await runSql(`UPDATE COUNTERS SET VISIT_COUNT = 0 WHERE ID = 1;COMMIT;`);
        
        res.json({ success: true, cleared: true });
    } catch (err) {
        console.error("CLEAR ERROR DETAILS:", err);
        res.status(500).json({ error: "Database error" });
    }
});

// ==========================================
// Table Management Endpoints
// ==========================================

// Get list of all available tables
app.get('/api/tables', async (req, res) => {
    if (isWindows) return res.json({ tables: ['COUNTERS', 'UNIQUE_VISITORS'] });

    try {
        const query = `
            SELECT RDB$RELATION_NAME 
            FROM RDB$RELATIONS 
            WHERE RDB$SYSTEM_FLAG = 0 OR RDB$SYSTEM_FLAG IS NULL;
        `;
        const result = await runSql(query);
        
        const tables = result
            .split('\n')
            .map(t => t.trim())
            .filter(t => t.length > 0);

        res.json({ tables });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Add a column to an existing table
app.post('/api/alter-table', async (req, res) => {
    if (isWindows) return res.json({ success: true, altered: true });

    try {
        await runSql(`ALTER TABLE UNIQUE_VISITORS ADD VISITED_AT TIMESTAMP; COMMIT;`);
        res.json({ success: true, message: "Table altered successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Completely delete a table
app.post('/api/drop-table', async (req, res) => {
    if (isWindows) return res.json({ success: true, dropped: true });

    try {
        await runSql(`DROP TABLE UNIQUE_VISITORS; COMMIT;`);
        res.json({ success: true, message: "Table dropped successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Re-create your required tables and seed the counter
app.post('/api/create-tables', async (req, res) => {
    if (isWindows) return res.json({ success: true, created: true });

    try {
        // Create Counters
        await runSql(`
            CREATE TABLE COUNTERS (
                ID INTEGER NOT NULL PRIMARY KEY,
                VISIT_COUNT INTEGER DEFAULT 0
            ); COMMIT;
        `);
        
        // Create Unique Visitors
        await runSql(`
            CREATE TABLE UNIQUE_VISITORS (
                IP_ADDRESS VARCHAR(45) NOT NULL PRIMARY KEY
            ); COMMIT;
        `);

        // Initialize Counters
        await runSql(`INSERT INTO COUNTERS (ID, VISIT_COUNT) VALUES (1, 0); COMMIT;`);

        res.json({ success: true, message: "Tables created successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Start Server
app.listen(3001, () => console.log('API server running on port 3001'));