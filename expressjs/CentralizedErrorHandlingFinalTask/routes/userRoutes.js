const express = require('express');
const router = express.Router();
const {getAllUsers,getUserById,addUser} = require('../controllers/userController');

//get all users
router.get("/", getAllUsers);
//user details by id
router.get("/:id", getUserById);

//adding a new user simple POST request
router.post("/", addUser);

module.exports = router;