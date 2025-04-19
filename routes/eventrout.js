// const express = require("express");
// const eventController = require("../controllers/event");
// const router = express.Router();  

// router.post("/event", eventController.addevents);
// router.get("/event", eventController.getAllevent);

// module.exports = router;





const express = require("express");
const eventController = require("../controllers/event");
const getUpload = require("../middlewares/multer");

const upload = getUpload("events"); 

const router = express.Router();

router.post(
  "/event",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "eventimages", maxCount: 5 },
    { name: "eventnameImage", maxCount: 1 },
  ]),
  eventController.addevents
);

router.get("/event", eventController.getAllevent);

module.exports = router;
