const Event= require("../models/eventmod");

exports.addevents = async (req, res) => {
  try {
    const { eventname,description,photos } = req.body;
    const newevent = new Event({ eventname,description,photos});
    await newevent.save();
    res.status(201).json({ message: "Event added successfully!", data: newevent });
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