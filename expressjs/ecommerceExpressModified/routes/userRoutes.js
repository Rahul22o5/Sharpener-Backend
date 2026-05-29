const express = require('express');
const router = express.Router();


//get all users
router.get("/",(req,res)=>{
    res.send("Fetching all users");
})
//user details by id
router.get("/:id",(req,res)=>{
    const userId = req.params.id;
    res.send(`Fetching user with ID: ${userId}`)
})

//create a new user simple POST request
router.post("/",(req,res)=>{
    res.send("Adding a new user");
});

module.exports = router;