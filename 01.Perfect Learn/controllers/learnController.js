const Courses = require("../model/course");
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

exports.getCourses = (req, res, next) => {
  Courses.fetchAllCourses()
    .then(([rows, fieldData]) => {
      res.render("courses", {
        data: data,
        courses: rows,
      });
    })
    .catch((err) => console.log(err));
  // res.render("courses", data);
};
