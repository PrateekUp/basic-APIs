const info = require("../models/info");
const branch = require("../models/branch");
const course = require("../models/course");
const mentor = require("../models/mentor");

exports.getinfo = async (req, res) => {
  try {
    const data = await info.findAll(req.query);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};
exports.getbranches = async (req, res) => {
  try {
    const data = await branch.findAll();
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};
exports.getcourses = async (req, res) => {
  try {
    const data = await course.findAll(req.query);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};
exports.getmentors = async (req, res) => {
  try {
    const data = await mentor.findAll(req.query);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};
