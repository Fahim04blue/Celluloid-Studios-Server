const Order = require("../models/orderModel");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getOrdersByEmail = async (req, res) => {
  try {
    const ordersByEmail = await Order.find({ email: req.query.email });
    res.status(200).json(ordersByEmail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const postOrder = async (req, res) => {
  const orders = req.body;
  const newOrder = new Order(orders);
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const orderUpdateDone = async (req, res) => {
  try {
    const updateDone = await Order.updateOne(
      { _id: req.params.id },
      { $set: { status: "Done" } }
    );
    res.status(200).json(updateDone);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const orderUpdateOnGoing = async (req, res) => {
  try {
    const updateOnGoing = await Order.updateOne(
      { _id: req.params.id },
      { $set: { status: "On Going" } }
    );
    res.status(200).json(updateOnGoing);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const orderUpdatePending = async (req, res) => {
  try {
    const updatePending = await Order.updateOne(
      { _id: req.params.id },
      { $set: { status: "Pending" } }
    );
    res.status(200).json(updatePending);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getOrders,
  getOrdersByEmail,
  postOrder,
  orderUpdateDone,
  orderUpdateOnGoing,
  orderUpdatePending,
};
