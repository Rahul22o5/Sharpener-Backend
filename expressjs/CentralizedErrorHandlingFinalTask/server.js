const express = require("express");
const app = express();
const AppError = require("./utils/appError");
const globalErrorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");

app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.use((req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}! Ready to handle requests.`);
});
