const Sequalize = require("sequelize");
const sequelize = require("../helper/database");

const Course = sequelize.define("course", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  preview: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  course_program: {
    type: Sequalize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequalize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequalize.DOUBLE,
    allowNull: false,
  },
});

module.exports = Course;
