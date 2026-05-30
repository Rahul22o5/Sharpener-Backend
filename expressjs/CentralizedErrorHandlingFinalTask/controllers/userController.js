const AppError = require("../utils/appError");

const getAllUsers = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: {
                message: "Fetching all users",
            },
        });
    } catch (err) {
        next(err);
    }
};

const getUserById = (req, res, next) => {
    try {
        const id = req.params.id;

        if (!id || isNaN(id)) {
            return next(new AppError("User ID must be a number", 400));
        }

        res.status(200).json({
            success: true,
            data: {
                id: Number(id),
                message: `Fetching user with ID: ${id}`,
            },
        });
    } catch (err) {
        next(err);
    }
};

const addUser = (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            return next(new AppError("User name is required", 400));
        }

        res.status(201).json({
            success: true,
            data: {
                name,
                message: "Adding a new user",
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
};