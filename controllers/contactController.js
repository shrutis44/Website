const contactService = require('../services/contactService');

exports.createContact = async (req, res) => {
    try {
        const contactData = req.body;
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

