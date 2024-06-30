var express = require('express');
var router = express.Router();
var ContactController = require('../controller/ContactController');

router.post('/submit', ContactController.submitContactDetails);

module.exports = router;
