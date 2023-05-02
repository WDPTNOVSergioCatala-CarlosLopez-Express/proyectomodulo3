const createError = require("http-errors");
const Cart = require("../models/cart.model");

module.exports.list = (req, res, next) => {
  Cart.find()
    .then((cart) => {
      if (cart.length === 0) {
        throw createError(404, "No carts found");
      }
      res.status(200).json(cart);
    })
    .catch(next);
};

function removeCartItem(cart, productIndex) {
  const item = cart.items[productIndex];
  if (item.quantity <= 0) {
    cart.items.splice(productIndex, 1);
  }
}

module.exports.getCart = (req, res, next) => {
  const owner = req.user.id;
  console.log(req.user.id)

  Cart.findOne({ owner })
    .populate("items.product")
    .then((cart) => {
      if (!cart) {
        throw createError(404, "Cart not found");
      }
      res.status(200).json(cart);
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const owner = req.user._id.toString();
  const productId = req.params.productId;
  const quantity = parseInt(req.params.quantity);

  if (isNaN(quantity)) {
    return next(createError(400, "Invalid quantity"));
  }

  Cart.findOne({ owner })
    .populate("items.product")
    .then((cart) => {
      if (!cart) {
        return Cart.create({
          owner: owner,
          items: [{ product: productId, quantity: quantity }],
        })
          .then((cart) => res.status(201).json(cart))
          .catch(next);
      }

      let item = cart.items.find((item) => item.product._id.toString() === productId);

      if (!item && quantity <= 0) {
        return res.status(204).json();
      }

      if (!item) {
        item = { product: productId, quantity: quantity };
        cart.items.push(item);
      } else {
        const newQuantity = item.quantity + quantity;
        if (newQuantity === 0) {
          cart.items = cart.items.filter((i) => i.product._id.toString() !== productId);
        } else if (newQuantity < 0) {
          throw createError(400, "Invalid quantity");
        } else {
          item.quantity = newQuantity;
        }
      }

      return cart.save().then((cart) => res.status(200).json(cart));
    })
    .catch(next);
};


module.exports.empty = async (req, res, next) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { owner: req.user.id },
      { $set: { items: [] } },
      { new: true }
    ).populate("items.product", "-cart");

    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error emptying cart" });
  }

};
