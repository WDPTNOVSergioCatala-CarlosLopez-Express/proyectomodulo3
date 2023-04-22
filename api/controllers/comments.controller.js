const Comment = require("../models/comment.model");

module.exports.create = (req, res) => {
  const text = req.body.text;
  const rating = req.body.rating;
  const product = req.params.id;
  const author = req.user.id
  const newComment = new Comment({
    text,rating, product, author
  });
  newComment
    .save()
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json(err));
};

module.exports.delete = (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json(err));
};
