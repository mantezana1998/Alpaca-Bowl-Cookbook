var router = require('express').Router();
var landCtrl = require('../controllers/land');

router.get('/', landCtrl.new);

module.exports = router; 