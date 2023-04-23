const Cart = require('../models/cart.model');


module.exports.list = (req, res, next) => {
    Cart.find()
        .then(cart => res.json(cart))
        .catch(next);
}

module.exports.update = (req, res, next) => {
    Cart.findById(req.params.id)
        .populate("products")
        .then(cart => {
            cart.items = req.body.items;
            cart.owner = req.user.id;
            cart.totalPrice = req.body.items;
        })
        .catch(next);
}

module.exports.delete = (req, res, next) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cart deleted.'))
        .catch(next);
}

module.exports.add = (req, res, next) => {
    const owner = req.user.id;

    Cart.findOne({owner})
        .then(cart => {
            if (cart){
                res.status(200).json(cart)
            } else {
                next(createError(404, "Cart not appear"))
            }
        })
        .catch(next)
}

module.exports.remove = (req, res, next) => {
    const name = req.body.name;
    const quantity = req.body.quantity;
}


