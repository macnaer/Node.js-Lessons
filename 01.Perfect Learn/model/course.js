const db = require("../helper/database");

module.exports = class Course {
  static fetchAllCourses() {
    return db.execute("SELECT * FROM course");
  }
  static fetchSingleCourse(id) {
    return "test";
  }
};
