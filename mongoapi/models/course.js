const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course_id: {
      type: Number,
      required: true,
    },
    course_name: {
      type: String,
      required: true,
    },
    course_desc: {
      type: String,
      required: false,
    },
    course_duration: {
      type: Number,
      required: false,
    },
    difficulty: {
      type: String,
      required: false,
    },
    expertise: {
      type: String,
      required: false,
    },
    branches_available: {
      type: Array,
      required: true,
    },

    mode_of_delivery: {
      type: String,
      required: true,
    },
    days_available: {
      type: String,
      required: true,
    },
    smartclass_available: {
      type: String,
      required: true,
    },
    max_strength: {
      type: Number,
      required: true,
    },
  },
  { collection: "Courses" }
);

module.exports = mongoose.model("Course", courseSchema);
