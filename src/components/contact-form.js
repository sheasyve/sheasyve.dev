import React, { useState } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const SERVER_URL = "http://localhost:3001/api/send-email";

        try {
            const response = await fetch(SERVER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) 
            });

            if (response.ok) {
                alert('Message sent successfully!');
                
                setFormData({ name: '', email: '', message: '' });
                setIsOpen(false);
            } else {
                alert('Oops! There was a problem sending the email from the server.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Could not connect to the server. Please try again later.');
        }
    };

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                Contact Me
            </button>

            {isOpen && (
                <div className="contact-overlay">
                    <div className="contact-modal">
                        <h3>Send a Message</h3>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="contact-form-item">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="contact-form-item">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="contact-form-item">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                />
                            </div>
                            
                            <div className="contact-button">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactForm;