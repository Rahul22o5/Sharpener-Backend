const express = require('express');
const router = express.Router();


//get all products
router.get("/",(req,res)=>{
    res.send("Fetching all products");
})
//product details by id
router.get("/:id",(req,res)=>{
    const productId = req.params.id;
    res.send(`Fetching product with ID: ${productId}`)
})

//adding a new product simple POST request
router.post("/",(req,res)=>{
    res.send("Adding a new product");
});

module.exports = router;