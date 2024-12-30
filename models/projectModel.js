const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    madeBy: { type: String, required: true },
    toolsUsed: { type: [String], required: true }, 
    githublink:{ type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);
