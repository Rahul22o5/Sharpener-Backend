const express = require("express");
const app = express();
let port=4000;

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

//get products
app.get('/products',(req,res) =>{
  res.send("Here is the list of all products.");
})
//POST products
app.post('/products',(req,res) =>{
  res.send("A new product has been added.");
})

//get categories
app.get('/categories',(req,res) =>{
  res.send("Here is the list of all categories.");
})
//POST categories
app.post('/categories',(req,res) =>{
  res.send("A new category has been created.");
})


app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})