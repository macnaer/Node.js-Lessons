const express = require("express");
const data = require("../helper/data");

const router = express.Router();

router.get("/about", (req, res, next) => {
  res.render("about", data);
});

module.exports = router;
