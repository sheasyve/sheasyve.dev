// routes/email.js
const express = require('express');
const { Resend } = require('resend');

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', 
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