const Cart = require('../models/cart.model');


module.exports.list = (req, res) => {
    Cart.find()
        .then(cart => res.json(cart))
        .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.update = (req, res) => {
    Cart.findById(req.params.id)
        .then(cart => {
            cart.name = req.body.name;
            cart.price = req.body.price;
            cart.quantity = req.body.quantity;
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.delete = (req, res) => {
    Cart.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cart deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

module.exports.add = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;
}

module.exports.remove = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;
}


