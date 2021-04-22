const express = require("express");
const router = express.Router();

const {
  getService,
  postService,
  getSpecificService,
  deleteService,
} = require("../controllers/serviceController");

router.get("/", getService);
router.get("/:id", getSpecificService);
router.post("/", postService);
router.delete("/:id", deleteService);

module.exports = router;
