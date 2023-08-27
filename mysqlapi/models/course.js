const db = require("../db/db.js");

class course {
  static findAll(query) {
    let sql = `SELECT * FROM courses WHERE difficulty='MEDIUM';`;
    return db.execute(sql);
  }
}

module.exports = course;
