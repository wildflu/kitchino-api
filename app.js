

const express = require('express')
const app = express();
const port = 3000;
const productRouter = require('./routes/product_routes')
const connectDB = require('./helpers/mongoose_connection')
const authMiddleware = require('./helpers/middleware');
const authRoutes = require('./routes/auth_routes')
const cartRoutes = require('./routes/bag_routes');
const contactRoutes = require('./routes/contact_routes')
connectDB();

// app.use(authMiddleware, productRouter);

app.use(express.json());
app.use(authRoutes) // auth routes
app.use(productRouter); // products routes
app.use('/cart', cartRoutes); // shopping card routes


app.use(contactRoutes); // contact routes


app.listen(port, ()=> {
    console.log('Your Server Is Liten onP Port 3000')
})
