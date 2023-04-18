const express = require("express");
const router = express.Router();

const users = require("../controllers/users.controller");
const products = require("../controllers/products.controller");
const cart = require("../controllers/cart.controller");
const comments = require("../controllers/comments.controller");
const orders = require("../controllers/orders.controller");

router.get("/users", users.list);
router.get("/users/:id", users.detail);
router.post("/users", users.create);
router.patch("/users/:id", users.update);
router.delete("/users:id,");

router.get("/products", products.list);
router.get("/products/:id", products.detail);
router.post("/products", products.create);
router.patch("/products/:id", products.update);
router.delete("/products:id", products.delete);

router.post("/products/:id/comment", comments.create);
router.delete("/products/:id/comment/:commentId", comments.delete);

//populate, localstorage
router.get("/cart", cart.list);
router.patch("/cart/:id", cart.update);
router.delete("/cart/:id", cart.delete);

router.post("/cart/:id/add", cart.add);
router.post("/cart/:id/remove", cart.remove);

router.get("/orders", orders.list);
router.get("/orders/:id", orders.detail);
router.post("/orders", orders.create);
router.patch("/orders/:id", orders.update);
router.delete("/orders:id", orders.delete);

router.post('/login', users.login)
router.post('/register', users.register)
router.post('/logout', users.logout)

module.exports = router;
