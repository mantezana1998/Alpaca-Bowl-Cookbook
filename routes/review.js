var router = require('express').Router()
var reviewsCtrl = require('../controllers/reviews');

router.post('/cookbook/:id/reviews', reviewsCtrl. create);

module.exports = router;

