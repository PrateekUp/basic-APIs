const express = require("express");
// const { get } = require("mongoose");
const router = express.Router();

// @route GET api/branch
const { getInfo, getBranches, getCourses } = require("../controllers/inst");

// @desc Test route
// @access Public
router.route("/").get(getInfo);
router.route("/course").get(getCourses);
router.route("/branch").get(getBranches);

module.exports = router;
