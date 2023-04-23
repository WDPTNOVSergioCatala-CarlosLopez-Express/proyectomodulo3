const Product = require("../models/product.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const productId = req.params.productId || req.params.id;
  Product.findById(productId)
    .populate("reviews")
    .then((product) => {
      if (product) {
        req.product = product;
        next();
      } else {
        next(createError(404, "Product not found"));
      }
    })
    .catch(next);
};

module.exports.checkAuthor = (req, res, next) => {
  if (
    !req.project.authors
      .map((x) => x.toString())
      .includes(req.user.id.toString())
  ) {
    next(createError(403, "Forbidden"));
  } else {
    next;
  }
};
