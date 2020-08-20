const Course = require("../model/course");

exports.addCourseGet = (req, res, next) => {
  res.render("admin/add-course");
};
exports.addCoursePost = (req, res, next) => {
  const title = req.body.title;
  const preview = req.body.preview;
  const course_program = req.body.course_program;
  const description = req.body.description;
  const image = req.body.image;
  const price = req.body.price;

  Course.create({
    title: title,
    preview: preview,
    course_program: course_program,
    image: image,
    description: description,
    price: price,
  })
    .then((result) => {
      console.log("Add course result => ", result);
      console.log("Course added.");
      res.redirect("/courses");
    })
    .catch((err) => console.log(err));
};
// exports.getCourses = (req, res, next) => {
//   Courses.findAll()
//     .then(([rows, fieldData]) => {
//       res.render("admin/courses", {
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
//         path: "/admin/courses",
//       });
//     })
//     .catch((err) => console.log(err));
// };

exports.getCourses = (req, res, next) => {
  Course.findAll()
    .then((curses) => {
      // console.log(curses);
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
        courses: curses,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteCourse = (req, res, next) => {
  const courseID = req.params.id;
  Course.findByPk(courseID)
    .then((course) => {
      return course.destroy();
    })
    .then((result) => {
      console.log("Course deleted");
      res.redirect("/admin/courses");
    })
    .catch((err) => console.log(err));
};
