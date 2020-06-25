const express = require("express");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  console.log("GET contact middleware");
  res.send(
    "<h1>Contact page</h1><form method='POST' action='/contact' ><input type='email' name='email' /><button type='submit'>Send</button></form>"
  );
});

router.post("/contact", (req, res, next) => {
  console.log("POST contact middleware");
  console.log("Request => ", req.body.email);
  let email = req.body.email;
  res.send(`<h1>${email}</h1>`);
  //   res.redirect("/contact");
});

module.exports = router;
