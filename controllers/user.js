const Member = require("../models/Member");

exports.addMember = async (req, res) => {
  try {
    const { profile, name, domain, year,github,linkedin } = req.body;
    const newMember = new Member({  profile,name, domain,  year,github,linkedin });
    await newMember.save();
    res.status(201).json({ message: "Member added successfully!", data: newMember });
  } catch (err) {
    res.status(500).json({ message: "Error adding member", error: err.message });
  }
};


exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: "Error fetching members", error: err.message });
  }
};