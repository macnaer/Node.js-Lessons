const express = require("express");
const data = require("../helper/data");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.render("contact", data);
});

// router.post("/contact", (req, res, next) => {
//   console.log("POST contact middleware");
//   console.log("Request => ", req.body.email);
//   let email = req.body.email;
//   res.send(`<h1>${email}</h1>`);
//   //   res.redirect("/contact");
// });

module.exports = router;
