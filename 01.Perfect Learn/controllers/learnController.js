const Course = require("../model/course");
const data = require("../helper/data");
exports.getHome = (req, res, next) => {
  res.render("index", {
    title: "Perfect learning",
    welcomeToEdu: "Loraem ipsum",
    applyToAdmission: "Lorem ipsum 2",
    research: "Lorem ipsum 3",
    footerText: "Fotter text",
    address: "Riven Riven",
    phone: "092586221",
    email: "abkcsd@fgdfg.com",
    date: new Date().getFullYear(),
  });
};

exports.getAbout = (req, res, next) => {
  res.render("about", {
    title: "Perfect learning",
    welcomeToEdu: "Loraem ipsum",
    applyToAdmission: "Lorem ipsum 2",
    research: "Lorem ipsum 3",
    footerText: "Fotter text",
    address: "Riven Riven",
    phone: "092586221",
    email: "abkcsd@fgdfg.com",
    date: new Date().getFullYear(),
  });
};

exports.getContact = (req, res, next) => {
  res.render("contact", {
    title: "Perfect learning",
    welcomeToEdu: "Loraem ipsum",
    applyToAdmission: "Lorem ipsum 2",
    research: "Lorem ipsum 3",
    footerText: "Fotter text",
    address: "Riven Riven",
    phone: "092586221",
    email: "abkcsd@fgdfg.com",
    date: new Date().getFullYear(),
  });
};

exports.getCourses = (req, res, next) => {
  Course.findAll()
    .then((curses) => {
      console.log(curses);
      res.render("courses", {
        title: "Perfect learning",
        welcomeToEdu: "Loraem ipsum",
        applyToAdmission: "Lorem ipsum 2",
        research: "Lorem ipsum 3",
        footerText: "Fotter text",
        address: "Riven Riven",
        phone: "092586221",
        email: "abkcsd@fgdfg.com",
        date: new Date().getFullYear(),
        courses: curses,
      });
    })
    .catch((err) => console.log(err));
};

// exports.getCourses = (req, res, next) => {
//   Course.findAll()
//     .then(([rows, fieldData]) => {
//       res.render("courses", {
//         title: "Perfect learning",
//         welcomeToEdu: "Loraem ipsum",
//         applyToAdmission: "Lorem ipsum 2",
//         research: "Lorem ipsum 3",
//         footerText: "Fotter text",
//         address: "Riven Riven",
//         phone: "092586221",
//         email: "abkcsd@fgdfg.com",
//         date: new Date().getFullYear(),
//         courses: rows,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// exports.getCourseByID = (req, res, next) => {
//   const courseID = req.params.id;
//   Courses.fetchSingleCourse(courseID)
//     .then(([rows, fieldData]) => {
//       res.render("courseDetail", {
//         title: "Perfect learning",
//         welcomeToEdu: "Loraem ipsum",
//         applyToAdmission: "Lorem ipsum 2",
//         research: "Lorem ipsum 3",
//         footerText: "Fotter text",
//         address: "Riven Riven",
//         phone: "092586221",
//         email: "abkcsd@fgdfg.com",
//         date: new Date().getFullYear(),
//         course: rows[0],
//       });
//     })
//     .catch((err) => console.log(err));
// };

exports.getCourseByID = (req, res, next) => {
  const courseID = req.params.id;
  Course.findByPk(courseID).then((course) => {
    res
      .render("courseDetail", {
        title: "Perfect learning",
        welcomeToEdu: "Loraem ipsum",
        applyToAdmission: "Lorem ipsum 2",
        research: "Lorem ipsum 3",
        footerText: "Fotter text",
        address: "Riven Riven",
        phone: "092586221",
        email: "abkcsd@fgdfg.com",
        date: new Date().getFullYear(),
        course: course,
      })
      .catch((err) => console.log(err));
  });
};
