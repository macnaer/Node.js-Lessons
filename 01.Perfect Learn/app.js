const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 8000;
const app = express();

const homeRoute = require("./routes/home");
const contactRoute = require("./routes/contact");
const aboutRoute = require("./routes/about");

// Middleware
//app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
//Routes middlewares
app.use(homeRoute);
app.use(contactRoute);
app.use(aboutRoute);
app.use((req, res, next) => {
  // res.send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
