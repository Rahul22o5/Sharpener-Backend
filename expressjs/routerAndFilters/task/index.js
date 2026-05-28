const express = require("express");
const app = express();
let port=4000;
const booksRouter = require("./routes/books");

app.use("/books", booksRouter);

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})
