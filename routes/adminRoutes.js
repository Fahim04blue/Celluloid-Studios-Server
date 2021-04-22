const express = require("express");
const router = express.Router();

const {
  createAdmin,
  isAdmin,
  getAdmin,
} = require("../controllers/adminController");

router.post("/", createAdmin);
router.post("/isAdmin", isAdmin);
router.get("/", getAdmin);

module.exports = router;
