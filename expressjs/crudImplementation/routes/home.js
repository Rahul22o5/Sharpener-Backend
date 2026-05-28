const express = require('express');
const router = express.Router();

//welcome message
router.get("/",(req,res)=>{
    res.send("Welcome to the Student & Course Portal API!");
})

module.exports = router;