const db = require("../db/db.js");

class branch {
  static findAll() {
    let sql = "SELECT * FROM branch;";
    return db.query(sql);
  }
}

module.exports = branch;
