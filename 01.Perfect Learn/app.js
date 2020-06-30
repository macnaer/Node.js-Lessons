const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./helper/helper");

const PORT = 8000;
const app = express();

const homeRoute = require("./routes/home");
const contactRoute = require("./routes/contact");
const aboutRoute = require("./routes/about");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
//Routes middlewares
app.use(homeRoute);
app.use(contactRoute);
app.use(aboutRoute);
app.use((req, res, next) => {
  // res.send("<h1>Page not found</h1>");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
