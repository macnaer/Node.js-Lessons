const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8000;
const app = express();

const homeRoute = require("./routes/home");
const contactRoute = require("./routes/contact");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRoute);
app.use(contactRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
