const express = require("express");
const app = express();
let port=4000;
const homeRouter = require("./routes/home");
const studentRouter = require("./routes/student");
const courseRouter = require("./routes/course");

app.use("/", homeRouter);
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
})
