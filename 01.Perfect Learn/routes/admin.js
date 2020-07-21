const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/courses", adminController.getCourses);

module.exports = router;
