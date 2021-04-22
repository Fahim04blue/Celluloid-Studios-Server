const Service = require("../models/serviceModel");

const postService = async (req, res) => {
  const service = req.body;
  const newService = new Service(service);
  try {
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getService = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getSpecificService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const deleteService = async (req, res) => {
  try {
    const removeService = await Service.remove({ _id: req.params.id });
    res.status(200).json(removeService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { postService, getService, getSpecificService, deleteService };
