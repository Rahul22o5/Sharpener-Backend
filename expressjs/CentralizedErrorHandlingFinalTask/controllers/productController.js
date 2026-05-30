const AppError = require("../utils/appError");

const getAllProducts = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: {
                message: "Fetching all products",
            },
        });
    } catch (err) {
        next(err);
    }
};

const getProductById = (req, res, next) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return next(new AppError("Product ID must be a number", 400));
        }

        res.status(200).json({
            success: true,
            data: {
                id: Number(id),
                message: `Fetching product with id ${id}`,
            },
        });
    } catch (err) {
        next(err);
    }
};

const addProduct = (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            return next(new AppError("Product name is required", 400));
        }

        res.status(201).json({
            success: true,
            data: {
                name,
                message: "Adding a new product",
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
};