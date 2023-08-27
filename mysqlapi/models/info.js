const db = require("../db/db.js");

class Info {
  static findAll() {
    let sql = "SELECT * FROM information;";
    return db.execute(sql);
  }
}

module.exports = Info;
