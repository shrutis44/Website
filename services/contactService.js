// const Contact = require('../models/contactModel');

// exports.saveContact = async (contactData) => {
//     const contact = new Contact(contactData);
//     return await contact.save();
// };

// exports.fetchAllContacts = async () => {
//     return await Contact.find();
// };

const Contact = require('../models/contactModel');
const nodemailer = require('nodemailer');

exports.saveContact = async (contactData) => {
    const contact = new Contact(contactData);
    await contact.save();

    await sendEmail(contactData);

    return contact;
};

const sendEmail = async (contactData) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL, 
            subject: 'New Contact Form Submission',
            text: `You have a new contact request:\n\nName: ${contactData.name}\nEmail: ${contactData.email}\nPhone: ${contactData.phone}\nMessage: ${contactData.message}`
        };

    
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};



