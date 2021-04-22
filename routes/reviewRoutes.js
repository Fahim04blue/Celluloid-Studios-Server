const express = require("express");
const router = express.Router();

const { postReview, getReviews } = require("../controllers/reviewController");

router.get("/", getReviews);
router.post("/", postReview);

module.exports = router;
