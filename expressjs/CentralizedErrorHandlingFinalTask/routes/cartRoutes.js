const express = require('express');
const router = express.Router();
const {getCartForUser,addProductToCart} = require('../controllers/cartController');

//cart details by id
router.get("/:id", getCartForUser);

//adding a new item to cart POST request
router.post("/:id", addProductToCart);

module.exports = router;