const express = require("express");
const learnController = require("../controllers/learnController");
const router = express.Router();

router.get("/", learnController.getHome);
router.get("/about", learnController.getAbout);
router.get("/contact", learnController.getContact);

module.exports = router;
