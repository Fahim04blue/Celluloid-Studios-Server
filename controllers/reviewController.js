const Review = require("../models/reviewModel");

const postReview = async (req, res) => {
  const review = req.body;
  const newReview = new Review(review);
  try {
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { postReview, getReviews };
