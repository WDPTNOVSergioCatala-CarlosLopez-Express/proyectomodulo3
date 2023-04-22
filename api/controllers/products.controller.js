const Product = require("../models/product.model");
const Comments = require("../models/comment.model");

module.exports.list = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.create = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const stock = req.body.stock;
  const category = req.body.category;
  const reference = req.body.reference;
  const images = req.body.images;

  const newProduct = new Product({
    name,
    price,
    description,
    stock,
    category,
    reference,
    images,
  });
  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.detail = (req, res) => {
  Product.findById(req.params.id)
    .populate('comments')
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.update = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.name = req.body.name;
      product.price = req.body.price;
      product.description = req.body.description;
      product.stock = req.body.stock;
      product.category = req.body.category;
      product.reference = req.body.reference;
      product.images = req.body.images;
      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.delete = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      return Comments.deleteMany({ product: req.params.id }).then(() =>
        res.status(204).json("Product and related comments deleted.")
      );
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
