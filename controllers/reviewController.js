const Review = require('../models/review');

exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};

exports.getReviewById = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const { productId, userId, rating, comment } = req.body;
    if (!productId || !userId || !rating) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newReview = new Review({ productId, userId, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    next(err);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const updated = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Review not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Review not found' });
    res.status(200).json({ message: 'Review deleted' });
  } catch (err) {
    next(err);
  }
};
