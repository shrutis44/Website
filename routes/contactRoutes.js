const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const contactController = require('../controllers/contactController');


const contactRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, 
    message:{ 
        success:false,
        messagr:'Too many requests from this IP, please try again after 15 minutes.'
    }
});

router.post('/',contactRateLimiter, contactController.createContact );

router.get('/', contactController.getAllContacts);

module.exports = router;
