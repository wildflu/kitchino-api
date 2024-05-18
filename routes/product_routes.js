// routes/product_routes.js

const express = require('express');
const router = express.Router();
const productController = require('../controller/product_controller');

router.get('/products', productController.getAllProducts);

// Route for getting a single product
router.get('/products/:productId', productController.getProductById);

// Route for creating a new product
router.post('/products', productController.createProduct);

// Route for updating a product
router.put('/products/', productController.updateProduct);

// Route for deleting a product
router.delete('/products/', productController.deleteProduct);


module.exports = router;
