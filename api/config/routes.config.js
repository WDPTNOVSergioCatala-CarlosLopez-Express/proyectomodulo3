const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");
const products = require("../controllers/products.controller");
const cart = require("../controllers/cart.controller");
const reviews = require("../controllers/reviews.controller");
const orders = require("../controllers/orders.controller");

const secure = require('../middlewares/secure.mid')
const reviewsMid = require("../middlewares/reviews.mid");
const productsMid = require('../middlewares/products.mid')

router.get("/users", secure.auth, users.list);
router.get("/users/:id",secure.auth, users.detail);
router.patch("/users/:id",secure.auth, users.update);
router.delete("/users:/id",secure.auth, users.delete);
router.post('/login', users.login)
router.post('/register', users.register)
router.post('/logout',secure.auth, users.logout)

router.get("/products", products.list);
router.post("/products", products.create);
router.get("/products/:id", products.detail);
router.patch("/products/:id", products.update);
router.delete("/products/:id", products.delete);
router.get("/categories", products.listCategories)
router.get("/subcategories", products.listSubcategories)


router.post("/products/:id/review", secure.auth, productsMid.exists, reviews.create);
router.delete("/products/:id/review/:reviewId", secure.auth, productsMid.exists,reviewsMid.exists, reviewsMid.checkAuthor, reviews.delete);

//populate, localstorage
router.get("/cart", cart.list);
router.patch("/cart/:productId/:quantity",secure.auth, cart.update);
router.post("/cart/empty",secure.auth, cart.empty);

router.get("/orders",secure.auth, orders.list);
router.post("/orders",secure.auth, orders.create);
router.get("/orders/:id",secure.auth, orders.detail);
router.patch("/orders/:id",secure.auth, orders.update);
router.delete("/orders/:id",secure.auth, orders.delete);

module.exports = router;
