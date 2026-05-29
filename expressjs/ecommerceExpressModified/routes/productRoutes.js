const express = require('express');
const router = express.Router();
const productController=require('../controllers/productController');

//get all products
router.get("/",productController.getProducts);
//product details by id
router.get("/:id",productController.getProductById);
//adding a new product simple POST request
router.post("/",productController.addProduct);
//updating a product by id
router.put("/:id",productController.updateProduct);
//deleting a product by id
router.delete("/:id",productController.deleteProduct);

module.exports = router;