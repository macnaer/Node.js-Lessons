const path = require("path");
const express = require("express");
// const rootDir = require("../helper/helper");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("home middleware");
  // res.send("<h1>Home page</h1>");
  // res.sendFile(path.join(rootDir, "views", "index.html"));
  res.render("index");
});

module.exports = router;
