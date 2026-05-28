const express = require("express");
const app = express();
let port=4000;
const ordersRouter = require("./routes/orders");
const usersRouter = require("./routes/users");

app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})
