var express = require('express');
var router = express.Router();
var ProductController = require('../controller/ProductController');

router.post('/saveProduct', ProductController.saveProduct);
router.get('/:id', ProductController.searchProduct);
router.get('/loadAllProducts', ProductController.loadAllProducts);

module.exports = router;
