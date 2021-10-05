var router = require('express').Router()
var reviewsCtrl = require('../controllers/reviews');

router.post('/cookbook/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete)

module.exports = router;

