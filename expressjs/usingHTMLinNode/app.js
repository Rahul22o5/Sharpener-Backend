const express = require("express");
const app = express();
let port=3000;

const productRouter = require("./routes/productRoutes");

app.use("/products", productRouter);


app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})
