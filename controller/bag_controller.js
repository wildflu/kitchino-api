

const User = require('../model/user');
const Product = require('../model/product');


class cartController{
    async addToCart (req, res) {
        try {
            const userId = req.user.userId;
            const { productId, quantity } = req.body;
            const user = await User.findById(userId);
            const product = await Product.findById(productId);
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
        }
        const cartItemIndex = user.cart.findIndex(item => item.productId.toString() === productId);
        if (cartItemIndex > -1) {
            user.cart[cartItemIndex].quantity += quantity;
        } else {
            user.cart.push({ productId, quantity });
        }
            await user.save();
            res.status(200).json({ message: 'Product added to cart' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

      // Remove product from cart
    async removeFromCart (req, res) {
        try {
            const userId = req.user.userId;
            const { productId } = req.body;
            const user = await User.findById(userId);
            user.cart = user.cart.filter(item => item.productId.toString() !== productId);
            await user.save();
            res.status(200).json({ message: 'Product removed from cart' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };
      // Get cart items
    async getCart (req, res){
        try {
            const userId = req.user.userId;
            const user = await User.findById(userId).populate('cart.productId');
            res.status(200).json(user.cart);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };
}

module.exports = new cartController();