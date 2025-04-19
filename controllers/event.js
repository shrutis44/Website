// const Event= require("../models/eventmod");

// exports.addevents = async (req, res) => {
//   try {
//     const { eventname,description,photos } = req.body;
//     const newevent = new Event({ eventname,description,photos});
//     await newevent.save();
//     res.status(201).json({ message: "Event added successfully!", data: newevent });
//   } catch (err) {
//     res.status(500).json({ message: "Error adding event", error: err.message });
//   }
// };


// exports.getAllevent = async (req, res) => {
//   try {
//     const gevent = await Event.find();
//     res.status(200).json(gevent);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching event", error: err.message });
//   }
// };




const Event = require("../models/eventmod");

exports.addevents = async (req, res) => {
  try {
    const { eventname, description, color } = req.body;

    const profile = req.files["profile"]?.[0]?.path || "";
    const eventnameImage = req.files["eventnameImage"]?.[0]?.path || "";
    const eventimages = req.files["eventimages"]?.map((file) => file.path) || [];

    const newEvent = new Event({
      eventname,
      description,
      color,
      profile: [profile, eventnameImage, ...eventimages],
    });

    await newEvent.save();
    res.status(201).json({ message: "Event added successfully!", data: newEvent });
  } catch (err) {
    res.status(500).json({ message: "Error adding event", error: err.message });
  }
};

exports.getAllevent = async (req, res) => {
  try {
    const gevent = await Event.find();
    res.status(200).json(gevent);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event", error: err.message });
  }
};

