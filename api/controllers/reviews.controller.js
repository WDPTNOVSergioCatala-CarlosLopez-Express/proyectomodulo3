const Review = require("../models/review.model");

module.exports.create = (req, res, next) => {
  Review.create({
    text: req.body.text,
    product: req.params.id,
    author: req.user.id,
    rating: req.body.rating
  })
    .then((review) => res.json(review))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Review.deleteOne({ _id: req.review.id })
    .then(() => res.status(204).send())
    .catch(next);
};
