const express = require('express');
const router = express.Router();

//get books
router.get('/',(req,res) =>{
  console.log("GET request made to /books");
  res.send("Here is the list of books.");
})
//POST books
router.post('/',(req,res) =>{
  console.log("POST request made to /books with data:", req.body);
  res.send("Book has been added!");
})

module.exports = router;