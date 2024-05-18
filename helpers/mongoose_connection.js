

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/kitchino');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection error:', error);
        process.exit(1); 
    }
};


module.exports = connectDB;
