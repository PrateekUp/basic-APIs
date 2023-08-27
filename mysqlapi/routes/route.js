const express = require("express");
const { get } = require("mongoose");
const {
  getinfo,
  getcourses,
  getbranches,
  getmentors,
} = require("../controllers/controller.js");
const router = express.Router();

router.route("/").get(getinfo);
router.route("/course").get(getcourses);
router.route("/branch").get(getbranches);
router.route("/mentor").get(getmentors);

module.exports = router;
