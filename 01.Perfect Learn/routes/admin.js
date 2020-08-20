const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/courses", adminController.getCourses);
router.get("/add-course", adminController.addCourseGet);
router.post("/add-course", adminController.addCoursePost);
router.get("/courses/:id", adminController.deleteCourse);

module.exports = router;
