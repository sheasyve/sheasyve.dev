// routes/email.js
const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, 
        auth: {
            user: process.env.EMAIL_ADDRESS,  
            pass: process.env.EMAIL_PASSWORD  
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_ADDRESS, 
        replyTo: email,                      
        to: 'syversonshea@gmail.com',    
        subject: `New Contact Form Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email via Zoho:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

module.exports = router;