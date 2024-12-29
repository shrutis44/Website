const Contact = require('../models/contactModel');

exports.saveContact = async (contactData) => {
    const contact = new Contact(contactData);
    return await contact.save();
};

exports.fetchAllContacts = async () => {
    return await Contact.find();
};
