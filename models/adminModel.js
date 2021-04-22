const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { collection: "admin" }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
