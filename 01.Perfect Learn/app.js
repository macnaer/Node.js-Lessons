const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Include sequalize
const sequalize = require("./helper/database");

const PORT = 8000;
const app = express();

//Routes middlewares
const learnRoutes = require("./routes/learn");
const adminRoutes = require("./routes/admin");

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

app.use("/courses", express.static(path.join(__dirname, "static")));
app.use("/admin/courses", express.static(path.join(__dirname, "static")));

app.use("/admin", adminRoutes);
app.use(learnRoutes);
app.use(errorController.get404);

sequalize
  .sync()
  .then((result) => {
    console.log("Sync result:", result);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
