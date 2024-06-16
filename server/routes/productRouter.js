var express = require('express');
var router = express.Router();

router.get('/allProducts', function (req, res) {
    res.send([
        {
            "id": 1,
            "name": "Spinach",
            "price": "100",
            "currency": "LKR",
            "image": "spinach.png"
        },
        {
            "id": 2,
            "name": "Beans",
            "price": "200",
            "currency": "LKR",
            "image": "beans.png"
        },
        {
            "id": 3,
            "name": "Tomato",
            "price": "300",
            "currency": "LKR",
            "image": "tomato.png"
        }
    ]);
});

module.exports = router;
