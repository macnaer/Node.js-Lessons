const express = require("express");
const path = require("path");
const rootDir = require("../helper/helper");

const router = express.Router();

router.get("/about", (req, res, next) => {
  // console.log("About middleware");
  // res.send("<h1>About page</h1>");
  res.sendFile(path.join(rootDir, "views", "about.html"));
});

module.exports = router;
