const AppError = require("../utils/appError");

const getCartForUser = (req, res, next) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return next(new AppError("User ID must be a number", 400));
        }

        res.status(200).json({
            success: true,
            data: {
                userId: Number(id),
                message: `Fetching cart for user with ID: ${id}`,
            },
        });
    } catch (err) {
        next(err);
    }
};

const addProductToCart = (req, res, next) => {
    try {
        const id = req.params.id;
        const { productId } = req.body;

        if (!id || isNaN(id)) {
            return next(new AppError("User ID must be a number", 400));
        }

        if (!productId) {
            return next(new AppError("productId is required to add to cart", 400));
        }

        res.status(201).json({
            success: true,
            data: {
                userId: Number(id),
                productId,
                message: `Adding product to cart for user with ID: ${id}`,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCartForUser,
    addProductToCart,
};