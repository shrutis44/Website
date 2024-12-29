const express = require("express");
const memberController = require("../controllers/user");
const router = express.Router();  

router.post("/members", memberController.addMember);
router.get("/members", memberController.getAllMembers);

module.exports = router;