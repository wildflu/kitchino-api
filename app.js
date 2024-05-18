

const express = require('express')
const app = express();
const port = 3000;
const productRouter = require('./routes/product_routes')
const connectDB = require('./helpers/mongoose_connection')

connectDB();
app.use(express.json());


app.use(productRouter);
app.listen(port, ()=> {
    console.log('Your Server Is Liten onP Port 3000')
})
