const data = require("../helper/data");
exports.getHome = (req, res, next) => {
  res.render("index", data);
};

exports.getAbout = (req, res, next) => {
  res.render("about", data);
};

exports.getContact = (req, res, next) => {
  res.render("contact", data);
};
