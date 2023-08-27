const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    branches: {
      type: Array,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    main_address: {
      type: String,
      required: true,
    },
  },
  { collection: "Information" }
);

module.exports = mongoose.model("Information", infoSchema);
