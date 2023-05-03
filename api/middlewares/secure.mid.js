const User = require("../models/user.model");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports.cleanBody = (req, res, next) => {
  // protect some body fields from being sent

  if (req.body) {
    delete req.body._id;
    delete req.body.author;
    delete req.body.createdAt;
    delete req.body.updatedAt;
    delete req.body.confirm;
  }

  next();
};

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1]; // "Bearer TOKEN"

  if (!token) {
    return next(createError(401, "Missing access token"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    User.findById(decoded.sub)
  .then((user) => {
    if (user) {
      req.user = user;
      delete req.user.__v;
      req.user.id = req.user._id.toString();
      delete req.user._id;

       // aquí se muestra la respuesta modificada

      next();
    } else {
      next(createError(401, "User not found"));
    }
  })
  .catch(next);
  } catch (err) {
    next(createError(401, err));
  }
};
