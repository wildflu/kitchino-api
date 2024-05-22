


const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact_controller');
const authMiddleware = require('../helpers/middleware');


router.post('/contact', authMiddleware, contactController.createContact); // Route to create a new contact message


router.get('/contact', authMiddleware, contactController.getAllContacts); // Route to get all contact messages (Admin only)

module.exports = router;
