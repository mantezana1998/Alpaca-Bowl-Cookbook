var router = require('express').Router()
var reviewsCtrl = require('../controllers/reviews');

router.post('/cookbook/:slug/reviews', reviewsCtrl. create);

module.exports = router;

