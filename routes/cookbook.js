var router = require('express').Router();
var recipeCtrl = require('../controllers/recipes');

router.get('/', recipeCtrl.new);

module.exports = router; 