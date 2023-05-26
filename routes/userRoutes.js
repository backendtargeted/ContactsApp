const express = require("express");
const ValidateToken = require("../middleware/validateTokenHandler");

const { 
    registerUser, 
    loginUser, 
    currentUser 
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", ValidateToken, currentUser);


module.exports = router;