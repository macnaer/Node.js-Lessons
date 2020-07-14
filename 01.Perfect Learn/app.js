const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 8000;
const app = express();
// Controllers
const errorController = require("./controllers/errorController");

// Database
const db = require("./helper/database");

// Middleware
//app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
//Routes middlewares
const learnRoutes = require("./routes/learn");

app.use(learnRoutes);
app.use(errorController.get404);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
