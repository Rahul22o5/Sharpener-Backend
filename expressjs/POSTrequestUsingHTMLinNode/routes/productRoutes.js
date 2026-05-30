const express = require('express');
const router = express.Router();
const productController=require('../controllers/productController');

//get all products
router.get("/",productController.getProducts);
//post a product
router.post("/",productController.postProduct);

module.exports = router;