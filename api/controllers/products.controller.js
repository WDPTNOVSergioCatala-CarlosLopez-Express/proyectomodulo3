const Product = require("../models/product.model");
const Review = require("../models/review.model");

module.exports.list = (req, res, next) => {
  const { category } = req.query

  const criterial = {}
  if (category && category.trim() !== "") {
    criterial.category = category;
  }
  Product.find(criterial)
    .populate("reviews")
    .then((products) => res.status(200).json(products))
    .catch(next);
};

module.exports.create = (req, res, next) => {
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
    .then(() => res.status(201).json("Product added!"))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Product.findById(req.params.id)
    
    .populate({path: 'reviews', populate:'author'})
    .then((product) => res.status(200).json(product))
    .catch(next);
};

module.exports.update = (req, res, next) => {
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
        .then(() => res.status(200).json("Product updated!"))
        .catch(next);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      return Review.deleteMany({ product: req.params.id }).then(() =>
        res.status(204).json("Product and related reviews deleted.")
      );
    })
    .catch(next);
};

module.exports.listCategories = (req, res, next) => {
  Product.distinct('category')
    .then((categories) => res.json(categories))
    .catch((error) => next(error));
};

module.exports.listSubcategories = (req, res, next) => {
  Product.distinct('subcategory')
    .then((subcategories) => res.json(subcategories))
    .catch((error) => next(error));
};