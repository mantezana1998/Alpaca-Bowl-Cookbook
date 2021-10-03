var router = require('express').Router();
var recipeCtrl = require('../controllers/cookbook');

router.get('/all', recipeCtrl.all);
router.get('/:slug', recipeCtrl.show);

module.exports = router; 