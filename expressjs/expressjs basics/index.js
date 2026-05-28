const express = require("express");
const app = express();
let port=3000;

//dynamic get
app.get('/welcome/:username',(req,res) =>{
  const username = req.params.username;
  const role=req.query.role
  res.send(`Welcome, ${username}! Your role is ${role}.`);
})


app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})