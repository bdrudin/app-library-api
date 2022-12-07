var express = require("express");
var router = express.Router();
const VenueController = require("../controller/venueController");
/* CRUD */
// Post
router.post("/", VenueController.store);
// Get
// Update
// Delete
module.exports = router;
