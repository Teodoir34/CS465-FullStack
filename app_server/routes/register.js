var express = require('express');
var router = express.Router();
const controller = require('../controllers/register');

/* GET login page. */
router.get('/', controller.register);

module.exports = router;
