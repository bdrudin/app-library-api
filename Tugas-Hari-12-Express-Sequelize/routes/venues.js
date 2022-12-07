var express = require("express");
var router = express.Router();
const VenueController = require("../controller/venueController");
/* CRUD */
// Post
router.post("/", VenueController.store);
// Get
router.get("/", VenueController.getDataAll);
router.get("/:id", VenueController.getDataById);
// Update
// Delete
module.exports = router;
