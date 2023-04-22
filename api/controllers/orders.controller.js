const Order = require('../models/order.model');

module.exports.list = (req, res, next) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch(next);
}

module.exports.create = (req, res, next) => {
    const order = new Order(req.body);
    order.save()
        .then((orders) => res.status(201).json(order))
        .catch(next);
}

module.exports.detail = (req, res, next) => {
  Order.findById(req.params.id)
    .then((orders) => res.json(order))
    .catch(next);
}

module.exports.update = (req, res, next) => {
    Object.assign(req.order, req.body);
    req.order.save()
        .then((orders) => res.json(order))
        .catch(next);
}

module.exports.delete = (req, res, next) => {
    req.order.remove()
        .then((orders) => res.status(204).json(order))
        .catch(next);
}

