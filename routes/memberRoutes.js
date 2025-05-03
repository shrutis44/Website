// const express = require("express");
// const memberController = require("../controllers/user");
// const router = express.Router();  

// router.post("/members", memberController.addMember);
// router.get("/members", memberController.getAllMembers);
// router.get("/members/:year", memberController.getMembersByYear);


// module.exports = router;



const express = require("express");
const memberController = require("../controllers/user");
const getUpload = require("../middlewares/multer");

const upload = getUpload("members"); 

const router = express.Router();

router.post("/members", upload.single("profile"), memberController.addMember);
router.post("/members/2ndyear", upload.single("profile"), (req, res, next) => {
    req.body.year = "2ndyear";
    memberController.addMember(req, res, next);
  });
  router.post("/members/3rdyear", upload.single("profile"), (req, res, next) => {
    req.body.year = "3rdyear";
    memberController.addMember(req, res, next);
  });
  router.post("/members/4thyear", upload.single("profile"), (req, res, next) => {
    req.body.year = "4thyear";
    memberController.addMember(req, res, next);
  });
   
router.get("/members", memberController.getAllMembers);
router.get("/members/:year", memberController.getMembersByYear);

module.exports = router;