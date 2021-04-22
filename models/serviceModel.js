const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  desc1: {
    type: String,
    required: true,
  },
  desc2: {
    type: String,
    required: true,
  },
  desc3: {
    type: String,
    required: true,
  },
  desc4: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("services", serviceSchema);

module.exports = Service;
