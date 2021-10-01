var router = require('express').Router();
var recipeCtrl = require('../controllers/cookbook');

router.get('/', recipeCtrl.all)
// router.get('/', recipeCtrl.index);
// router.get('/:id', recipeCtrl.show);

module.exports = router; 