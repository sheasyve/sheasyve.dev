// server.js
require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const visitorRoutes = require('./routes/visitor');
const emailRoutes = require('./routes/email');

const app = express();

app.set('trust proxy', 1);

// CORS configuration
const allowedOrigins = ['https://sheasyve.dev'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// CRITICAL: Parses incoming JSON payloads (needed for the email form)
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 10, 
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true, 
    legacyHeaders: false, 
});
app.use(limiter);

// Mount the routes to the /api path
app.use('/api', visitorRoutes);
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));