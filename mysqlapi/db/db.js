require("dotenv").config({ path: "../.env" });
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tarininginstitute-b",
  password: "3014",
});

module.exports = pool.promise();
