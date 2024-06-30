const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        "id": {require: true, type: Number, unique: true, index: true},
        "name": {require: true, type: String},
        "price": {require: true, type: Number},
        "currency": {require: true, type: String},
        "image": {require: true, type: String}
    },
    {versionKey: false}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;