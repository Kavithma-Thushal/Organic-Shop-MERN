var express = require('express');
var router = express.Router();

router.post('/submit', function (req, res) {
    const requestBody = req.body;
    console.log(requestBody);
    res.send("Contact Details Send Successfully...!");
});

module.exports = router;
