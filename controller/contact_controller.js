

// controllers/contactController.js

const Contact = require('../model/contact');
const User = require('../model/user');

// Controller method to create a new contact message

class ContactController  {
  async createContact (req, res){
    try {
      const userId = req.user.userId;
      const { name, email, message } = req.body;
  
      const contact = new Contact({
        userId,
        name,
        email,
        message
      });
  
      await contact.save();
      res.status(201).json({ message: 'Contact message sent successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAllContacts (req, res) {
    try {
      // Optional: Check if the user is an admin
      const user = await User.findById(req.user.userId);
      if (!user.isAdmin) {
        return res.status(403).json({ message: 'Access denied' });
      }
  
      const contacts = await Contact.find().populate('userId', 'username email');
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ContactController();