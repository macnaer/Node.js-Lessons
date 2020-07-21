const Courses = require("../model/course");

exports.getCourses = (req, res, next) => {
  Courses.fetchAllCourses()
    .then(([rows, fieldData]) => {
      res.render("admin/courses", {
        title: "Perfect learning",
        welcomeToEdu: "Loraem ipsum",
        applyToAdmission: "Lorem ipsum 2",
        research: "Lorem ipsum 3",
        footerText: "Fotter text",
        address: "Riven Riven",
        phone: "092586221",
        email: "abkcsd@fgdfg.com",
        date: new Date().getFullYear(),
        courses: rows,
        path: "/admin/courses",
      });
    })
    .catch((err) => console.log(err));
};
