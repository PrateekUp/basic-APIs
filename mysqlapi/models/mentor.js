const db = require("../db/db.js");

class mentor {
  static findAll() {
    let sql = "SELECT * FROM mentor;";
    return db.execute(sql);
  }
}

module.exports = mentor;
