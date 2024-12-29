const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: [{
    type: String 
}]
  
});

module.exports = mongoose.model("Event", eventSchema)