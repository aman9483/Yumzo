const express = require('express');
const router = express.Router();
const {newFoods, AllFood} = require('../Controllers/FoodContollers');
const { authMiddleware, adminMiddleware} = require('../Middleware/AuthMiddleware')


router.post('/newFood', authMiddleware, adminMiddleware, newFoods);

router.get('/AllFood',  AllFood);

module.exports = router;
