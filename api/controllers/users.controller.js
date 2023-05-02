const User = require('../models/user.model');
const createError = require("http-errors");
const mailer = require("../config/mailer.config");
const jwt = require("jsonwebtoken");
const Cart = require('../models/cart.model');
const moment = require('moment')

module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => {
        if (!user) {
        throw createError(404, 'User not found');
        } else {
        res.json(user);
        }
    })
    .catch((error) => next(error));

}; 


module.exports.update = (req, res, next) => {
    User.findById(req.params.id)
    .then((user) => {
        if (!user) {
        throw createError(404, 'User not found');
        } else {
        user.set(req.body);
        user.save()
            .then((user) => res.json(user))
            .catch((error) => next(error));
        }
    })
    .catch((error) => next(error));
};
    
module.exports.delete = (req, res, next) => {    
    User.findByIdAndRemove(req.params.id)
    .then((user) => {
        if (!user) {
        throw createError(404, 'User not found');
        } else {
        res.status(204).json();
        }
    })
    .catch((error) => next(error));
};

module.exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return next(createError(401, { errors: { password: 'Invalid credentials' }}));
        }
  
        if (!user.isConfirmed) {
          return next(createError(401, { errors: { username: 'Please confirm your account' } }));
        }
  
        user.checkPassword(req.body.password).then((match) => {
          if (!match) {
            return next(createError(401, { errors: { password: 'Invalid credentials' } }));
          }
  
          const token = jwt.sign(
            { sub: user.id, exp: moment().add(1, 'days').valueOf() / 1000 }, // 1h duration
            process.env.JWT_SECRET
          );
  
          res.json({ token, ...user.toJSON() });
        });
      })
      .catch(next);
  };

module.exports.register = (req, res, next) => {
    
    User.create(req.body)
    .then((user) => {
        return Cart
          .create({ owner : user.id })
          .then(cart => res.status(201).json(user))//mailer.sendValidationEmail(user.email, user.name, user.confirmationCode);
    })
    .catch((error) => next(error));
}

module.exports.logout = (req, res) => {
    req.session.destroy();
    res.status(204).json();
}
