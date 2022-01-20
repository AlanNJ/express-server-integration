const express = require("express");
const loginUser = require("../controllers/loginUser");
const registerUser = require("../controllers/registerUser");

const router = express.Router();

//routes for authentication of the user
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
