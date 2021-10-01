var router = require('express').Router();
var recipeCtrl = require('../controllers/recipes');

router.get('/', recipeCtrl.new);
router.get('/land', recipeCtrl.new)

module.exports = router; 