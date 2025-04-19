// const Member = require("../models/Member");
// exports.addMember = async (req, res) => {
//   try {
//     const { profile, name, domain, year,github, instagram ,linkedin } = req.body;
//     const newMember = new Member({  profile,name, domain,  year,github,instagram,linkedin });
//     await newMember.save();
//     res.status(201).json({ message: "Member added successfully!", data: newMember });
//   } catch (err) {
//     res.status(500).json({ message: "Error adding member", error: err.message });
//   }
// };


// exports.getAllMembers = async (req, res) => {
//   try {
//     const members = await Member.find();
//     res.status(200).json(members);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching members", error: err.message });
//   }
// };

// exports.getMembersByYear = async (req, res) => {
//   try {
//     const { year } = req.params;
//     const members = await Member.find({ year });
//     res.status(200).json(members);
//   } catch (err) {
//     res.status(500).json({ message:` Error fetching members for year ${req.params.year}`, error: err.message });
//   }
// };


const Member = require("../models/Member");

exports.addMember = async (req, res) => {
  try {
    const { name, domain, year, github, instagram, linkedin } = req.body;
    const profile = req.file.path;

    const newMember = new Member({ profile, name, domain, year, github, instagram, linkedin });
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

exports.getMembersByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const members = await Member.find({ year });
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: `Error fetching members for year ${req.params.year}`, error: err.message });
  }
};



