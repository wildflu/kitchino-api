

// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to create a new contact message
router.post('/contact', authMiddleware, contactController.createContact);

// Route to get all contact messages (Admin only)
router.get('/contact', authMiddleware, contactController.getAllContacts);

module.exports = router;
