

const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        require: false,
    },
    quantity:{
        type:Number,
        require: true,
    },
    price:{
        type: Number,
        required: true
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product