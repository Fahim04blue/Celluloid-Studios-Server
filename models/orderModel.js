const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "pending",
  },
  orderTime: {
    type: String,
    require: true,
  },
  bookedUserInfo: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  paymentId: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
