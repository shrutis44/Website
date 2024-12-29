const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
    domain: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Domain', domainSchema);
