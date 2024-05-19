

const express = require('express');
const router = express.Router();
const cartController = require('../controller/bag_controller');
const authMiddleware = require('../helpers/middleware');

// Add product to cart
router.post('/add', authMiddleware, cartController.addToCart);

// Remove product from cart
router.post('/remove', authMiddleware, cartController.removeFromCart);

// Get cart items
router.get('/', authMiddleware, cartController.getCart);

module.exports = router;
