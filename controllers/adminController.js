const Admin = require("../models/adminModel");

const createAdmin = async (req, res) => {
  const admin = req.body;
  const newAdmin = new Admin(admin);
  try {
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const isAdmin = async (req, res) => {
  try {
    const findAdmin = await Admin.find({ email: req.body.email });
    res.status(200).json(findAdmin.length > 0);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const getAdmin = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createAdmin, isAdmin, getAdmin };
