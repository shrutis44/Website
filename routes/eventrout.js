const express = require("express");
const eventController = require("../controllers/event");
const router = express.Router();  

router.post("/event", eventController.addevents);
router.get("/event", eventController.getAllevent);

module.exports = router;