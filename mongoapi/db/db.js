require("dotenv").config({ path: ".././.env" });

const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectDB = () => {
  try {
    mongoose.connect(uri, { dbName: "TrainingInstitute-A" });
    console.log("MogoDB connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
