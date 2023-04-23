const Review = require("../models/review.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const reviewId = req.params.reviewId || req.params.id;

  Review.findById(reviewId)
    .then((review) => {
      if (review) {
        req.review = review;
        next();
      } else {
        next(createError(404, "Review not found"));
      }
    })
    .catch(next);
};

module.exports.checkAuthor = (req, res, next) => {
  console.log(req.review.author.toString(), req.user.id.toString());
  if (req.review.author.toString() !== req.user.id.toString()) {
    next(createError(403, "Forbidden"));
  } else {
    next();
  }
};
