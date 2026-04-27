const express = require('express');
const { exec } = require('child_process');
require('dotenv').config();

const app = express();

// Check if we are running on Windows
const isWindows = process.platform === 'win32';

const dbPath = "/var/lib/firebird/data/visitor_counter.fdb";
const auth = `-user sysdba -password '${process.env.DB_PASSWORD}'`;

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

app.post('/api/increment', (req, res) => {
    // If on Windows, just pretend it worked
    if (isWindows) return res.json({ success: true, mocked: true });

    const query = "UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1;";
    const cmd = `echo "${query}" | isql-fb ${dbPath} ${auth}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        res.json({ success: true });
    });
});

app.listen(3001, () => console.log('API server running on port 3001'));