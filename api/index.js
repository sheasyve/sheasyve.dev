const express = require('express');
const { exec } = require('child_process');
const app = express();
require('dotenv').config();
const dbPath = "/var/lib/firebird/data/visitor_counter.fdb";
const auth = `-user sysdba -password '${process.env.DB_PASSWORD}'`;
// GET the current count

app.get('/api/count', (req, res) => {
    const query = "SELECT VISIT_COUNT FROM COUNTERS WHERE ID = 1;";
    const cmd = `echo "${query}" | isql-fb ${dbPath} ${auth}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });

        // Use Regex to find the first actual number in the text output
        const match = stdout.match(/\d+/);
        // If it finds a number, parse it. If the table is empty somehow, default to 0.
        const count = match ? parseInt(match[0], 10) : 0;
        
        res.json({ count: count });
    });
});

// POST to increment the count
app.post('/api/increment', (req, res) => {
    const query = "UPDATE COUNTERS SET VISIT_COUNT = VISIT_COUNT + 1 WHERE ID = 1;";
    const cmd = `echo "${query}" | isql-fb ${dbPath} ${auth}`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.status(500).json({ error: stderr });
        res.json({ success: true });
    });
});

app.listen(3001, () => console.log('API server running on port 3001'));
