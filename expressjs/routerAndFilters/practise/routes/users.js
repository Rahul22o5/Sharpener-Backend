const express = require('express');
const router = express.Router();

//get users
router.get('/',(req,res) =>{
  res.send("Here is the list of all users.");
})
//POST users
router.post('/',(req,res) =>{
  res.send("A new user has been created.");
})

module.exports = router;