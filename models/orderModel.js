const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  isSignedIn: {
    type: Boolean,
    required: true,
  },
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
  service: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "services",
  },
  status: {
    type: String,
    default: "pending",
  },
  orderTime: {
    type: Date,
    default: new Date().toDateString(),
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
