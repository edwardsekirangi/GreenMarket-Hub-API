const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authenticate } = require('../middleware/auth');

router.get('/', reviewController.getReviews);
router.get('/:id', reviewController.getReviewById);
router.post('/', authenticate, reviewController.createReview);
router.put('/:id', authenticate, reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
