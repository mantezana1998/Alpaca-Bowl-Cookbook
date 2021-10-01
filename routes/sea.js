var router = require('express').Router();
var seaCtrl = require('../controllers/sea');

router.get('/', seaCtrl.all)

module.exports = router; 