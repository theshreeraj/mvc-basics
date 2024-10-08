const Product = require("../models/productSchema.js");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: "Products found", data: products });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




module.exports = {
    getProducts,
};
