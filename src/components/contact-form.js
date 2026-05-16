/*A button that when clicked, opens up a contact form to send an email to the author of the website*/

import React, { useState } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    

}

export default ContactForm;