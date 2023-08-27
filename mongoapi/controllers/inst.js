const Info = require("../models/info");
const Branches = require("../models/branch");
const Courses = require("../models/course");

const getInfo = async (req, res) => {
  const data = await Info.find(req.query);
  res.status(200).json(data);
};

const getBranches = async (req, res) => {
  const data = await Branches.find(req.query);
  res.status(200).json(data);
};
const getCourses = async (req, res) => {
  const data = await Courses.find(req.query);
  res.status(200).json(data);
};

module.exports = { getInfo, getBranches, getCourses };
