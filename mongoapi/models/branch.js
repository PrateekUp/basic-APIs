const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: false,
    },
    max_strength: {
      type: Number,
      required: false,
    },
  },
  { collection: "Branches" }
);

module.exports = mongoose.model("Branch", branchSchema);
