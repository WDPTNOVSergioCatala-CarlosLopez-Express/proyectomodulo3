const Cart = require("../models/cart.model");

module.exports.list = (req, res, next) => {
  Cart.find()
    .then((cart) => res.json(cart))
    .catch(next);
};

module.exports.update = (req, res, next) => {

    const owner = req.user._id.toString();
    const productId = req.params.productId;
    const quantity = parseInt(req.params.quantity);
  
    if (isNaN(quantity) || quantity <= 0) {
      return next(createError(400, "Invalid quantity"));
    }
  
    Cart.findOne({ owner })
      .then((cart) => {
        if (!cart) {
          return Cart.create({
            owner: owner,
            products: [{ product: productId, quantity: quantity }],
          })
            .then(() => res.status(201).json())
            .catch((error) => next(error));
        }
        if (!cart.products) {
            cart.products = [];
          }
        const productIndex = cart.products.findIndex(
          (p) => p.product == productId
        );
  
        if (productIndex == -1) {
          cart.products.push({ product: productId, quantity: quantity });
        } else {
          cart.products[productIndex].quantity += quantity;
        }
  
        return cart
          .save()
          .then(() => res.status(202).json())
          .catch(next);
      })
      .catch(next);
  };



module.exports.remove = (req, res, next) => {
    const userId = req.user.id;

    Cart.findOneAndUpdate({ owner: userId }, { products: [] })
      .then((cart) => {
        if (!cart) {
          throw createError(404, 'Cart not found');
        }
        res.status(204).json();
      })
      .catch((error) => next(error));
};
