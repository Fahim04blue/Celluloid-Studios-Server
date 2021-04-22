const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { collection: "review" }
);

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
