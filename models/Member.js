const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    profile: {
        type: String, 
        required: true
      },

  name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  github: {
     type: String, 
     required: false 
    }, 
  instagram: {
    type: String, 
    required: false 
    }, 
  linkedin: { 
    type: String, 
    required: false
   },
  year: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Member", memberSchema);

