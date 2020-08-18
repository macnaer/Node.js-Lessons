const Sequelize = require("sequelize");

const sequelize = new Sequelize("e-lern", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
