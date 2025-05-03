// const contactService = require('../services/contactService');

// exports.createContact = async (req, res) => {
//     try {
//         const contactData = req.body;
//         const contact = await contactService.saveContact(contactData);
//         res.status(201).json({ message: 'Contact saved successfully', data: contact });
//     } catch (error) {
//         res.status(500).json({ message: 'Error saving contact', error: error.message });
//     }
// };

// exports.getAllContacts = async (req, res) => {
//     try {
//         const contacts = await contactService.fetchAllContacts();
//         res.status(200).json({ data: contacts });
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving contacts', error: error.message });
//     }
// };


const contactService = require('../services/contactService');
const axios = require('axios');
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, message, recaptchaResponse } = req.body;
        

        if (!name || name.trim().length <= 2) {
            return res.status(400).json({ message: 'Name must be longer than 2 characters.' });
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'Phone number must be exactly 10 digits.' });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@akgec\.ac\.in$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Email must end with @akgec.ac.in' });
        }

        const wordCount = message.trim().split(/\s+/).length;
        if (wordCount <= 5) {
            return res.status(400).json({ message: 'Message must be more than 5 words.' });
        }


        const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify`;
        const params = new URLSearchParams();
        params.append('secret', RECAPTCHA_SECRET_KEY);
        params.append('response', recaptchaResponse);
        
        const recaptchaResponseGoogle = await axios.post(recaptchaVerificationUrl, params);
        const { success } = recaptchaResponseGoogle.data;
        if (!success) {
            return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
        }

        const contactData = { name, email, phone, message };
        const contact = await contactService.saveContact(contactData);

        res.status(201).json({ 
            message:`Thank you, ${name}, for reaching out! Your message has been received. We'll get back to you shortly.`,
            data:contact
         });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact', error: error.message });
    }
};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await contactService.fetchAllContacts();
        res.status(200).json({ data: contacts });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contacts', error: error.message });
    }
};
