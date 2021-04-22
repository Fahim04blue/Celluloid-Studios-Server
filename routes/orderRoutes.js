const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrdersByEmail,
  postOrder,
  orderUpdateDone,
  orderUpdateOnGoing,
  orderUpdatePending,
} = require("../controllers/orderController");

router.get("/", getOrders);
router.get("/order", getOrdersByEmail);
router.post("/", postOrder);
router.patch("/updateDone/:id", orderUpdateDone);
router.patch("/updateOnGoing/:id", orderUpdateOnGoing);
router.patch("/updatePending/:id", orderUpdatePending);

module.exports = router;
