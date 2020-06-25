const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("home middleware");
  res.send("<h1>Home page</h1>");
});

module.exports = router;
