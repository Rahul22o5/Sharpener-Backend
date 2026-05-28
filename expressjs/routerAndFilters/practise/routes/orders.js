const express = require('express');
const router = express.Router();

//get orders
router.get('/',(req,res) =>{
  res.send("Here is the list of all orders.");
})
//POST orders
router.post('/',(req,res) =>{
  res.send("A new order has been created.");
})

module.exports = router;