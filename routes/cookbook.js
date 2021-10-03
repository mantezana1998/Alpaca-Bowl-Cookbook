var router = require('express').Router();
var recipeCtrl = require('../controllers/cookbook');

router.get('/', recipeCtrl.all)
router.get('/:id', recipeCtrl.show);
// router.get('/', recipeCtrl.index);

module.exports = router; 