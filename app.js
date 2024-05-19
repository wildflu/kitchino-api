

const express = require('express')
const app = express();
const port = 3000;
const productRouter = require('./routes/product_routes')
const connectDB = require('./helpers/mongoose_connection')
const authMiddleware = require('./helpers/middleware');
const authRoutes = require('./routes/auth_routes')
const cartRoutes = require('./routes/bag_routes');
connectDB();

app.use(express.json());
app.use(authRoutes)
// app.use(authMiddleware, productRouter);
app.use(productRouter);
app.use('/cart', cartRoutes);


app.listen(port, ()=> {
    console.log('Your Server Is Liten onP Port 3000')
})
