var router = require('express').Router()
var reviewsCtrl = require('../controllers/reviews');

router.post('/cookbook/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);
router.put('/cookbook/:id', reviewsCtrl.update);

module.exports = router;

