const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "e-lern",
  user: "root",
  password: "",
});

module.exports = pool.promise();
