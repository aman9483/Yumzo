const express = require('express');
const router = express.Router();
const { Register , login, logout} = require('../Controllers/AuthController');
const { authMiddleware} = require('../Middleware/AuthMiddleware')


router.post('/register', Register);
router.post('/login', login);
router.get('/logout', authMiddleware, logout);
module.exports = router;
