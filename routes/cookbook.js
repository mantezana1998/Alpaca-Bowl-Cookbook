var router = require('express').Router();
var recipeCtrl = require('../controllers/cookbook');

router.get('/all', recipeCtrl.index);
// router.get('/:id', recipeCtrl.show);

module.exports = router; 