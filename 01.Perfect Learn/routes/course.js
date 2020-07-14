const express = require("express");
const path = require("path");
const data = require("../helper/data");

const router = express.Router();

router.get("/courses", (req, res, next) => {
  res.render("courses", data);
});

module.exports = router;
