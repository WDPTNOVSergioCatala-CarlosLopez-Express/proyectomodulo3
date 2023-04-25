const Order = require("../models/order.model");

module.exports.create = (req, res, next) => {
  Order.create({
    orderNumber: req.body.orderNumber,
    client: req.user.id,
    orderItems: req.body.orderItems,
    totalPrice: req.body.totalPrice,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    paymentResult: req.body.paymentResult,
    isPaid: req.body.isPaid,
    paidAt: req.body.paidAt,
  })
    .then((order) => res.json(order))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Order.find({ client: req.user.id })
    .populate("client")
    .populate("orderItems.product")
    .then((orders) => res.json(orders))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Order.findOne({ _id: req.params.id, client: req.user.id })
    .populate("client")
    .populate("orderItems.product")
    .then((order) => {
      if (!order) {
        res.status(404).send();
      } else {
        res.json(order);
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Order.findOneAndUpdate(
    { _id: req.params.id, client: req.user.id },
    req.body,
    { new: true }
  )
    .then((order) => {
      if (!order) {
        res.status(404).send();
      } else {
        res.json(order);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Order.deleteOne({ _id: req.params.id, client: req.user.id })
    .then(() => res.status(204).send())
    .catch(next);
};
