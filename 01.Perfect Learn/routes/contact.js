const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../helper/helper");

router.get("/contact", (req, res, next) => {
  // console.log("GET contact middleware");
  // res.send(
  //   "<h1>Contact page</h1><form method='POST' action='/contact' ><input type='email' name='email' /><button type='submit'>Send</button></form>"
  // );
  // res.sendFile(path.join(rootDir, "views", "contact.html"));
  res.render("contact");
});

// router.post("/contact", (req, res, next) => {
//   console.log("POST contact middleware");
//   console.log("Request => ", req.body.email);
//   let email = req.body.email;
//   res.send(`<h1>${email}</h1>`);
//   //   res.redirect("/contact");
// });

module.exports = router;
