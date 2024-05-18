

const Product = require("../model/product");

class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

  // Controller method for getting a single product by ID
    async getProductById(req, res) {
        try {
            const product = await Product.findById(req.params.productId);
            if (product == null) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(product);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

  // Controller method for creating a new product
    async createProduct(req, res) {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
        });

        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

  // Controller method for updating a product
    async updateProduct(req, res) {
        try {
            const productId = req.query.productId;
            if (!productId) {
                return res.status(400).json({ message: 'Product ID is required in query parameters' });
            }
            const product = await Product.findById(productId);
            if (product == null) {
                return res.status(404).json({ message: 'Product not found' });
            }
            if (req.body.name != null) {
                product.name = req.body.name;
            }
            if (req.body.description != null) {
                product.description = req.body.description;
            }
            if (req.body.quantity != null) {
                product.quantity = req.body.quantity;
            }
            if (req.body.price != null) {
                product.price = req.body.price;
            }
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteProduct (req, res) {
        try {
            const productId = req.query.productId;
            if (!productId) {
                return res.status(400).json({ message: 'Product ID is required in query parameters' });
            }
            const product = await Product.findById(productId);
            if (product == null) {
                return res.status(404).json({ message: 'Product not found' });
            }
            await Product.deleteOne({ _id: productId });
            res.json({ message: 'Product deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };
}

module.exports = new ProductController();
