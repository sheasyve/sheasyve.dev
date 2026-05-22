// routes/email.js
const express = require('express');
const { Resend } = require('resend');
const rateLimit = require('express-rate-limit');

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const emailLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 1,
    message: { message: 'You can only send one message every 10 minutes. Please try again later.' },
    standardHeaders: true, 
    legacyHeaders: false,
});

router.post('/send-email', emailLimiter, async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await resend.emails.send({
            from: 'sheasyve.dev <onboarding@resend.dev>', 
            to: 'syversonshea@gmail.com',                
            reply_to: email,
            subject: `New Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        });

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email via Resend API:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

module.exports = router;