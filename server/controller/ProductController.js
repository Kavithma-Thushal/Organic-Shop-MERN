var Product = require('../model/ProductModel');

var ProductController = {

    saveProduct: async function (req, res, next) {
        try {
            const productData = req.body;
            const product = await Product.create(productData);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({error: 'Something went wrong...!'});
        }
    },

    searchProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const product = await Product.findOne({id: productId});
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({error: 'Something went wrong...!'});
        }
    },

    loadAllProducts: async function (req, res, next) {
        try {
            const productList = await Product.find();
            res.status(200).json(productList);
        } catch (err) {
            res.status(500).json({error: 'Something went wrong...!'});
        }
    },
}

module.exports = ProductController;
