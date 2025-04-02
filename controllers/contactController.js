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

        res.status(201).json({ message: 'Contact saved successfully', data: contact });
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
