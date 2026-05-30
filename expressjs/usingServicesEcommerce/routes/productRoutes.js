const express = require('express');
const router = express.Router();
const {getProducts,getProductById,addProduct}=require('../controllers/productController');

//get all products
router.get("/",getProducts);
//product details by id
router.get("/:id",getProductById);
//adding a new product simple POST request
router.post("/",addProduct);

module.exports = router;