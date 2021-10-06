var router = require('express').Router()
var reviewsCtrl = require('../controllers/reviews');

router.post('/cookbook/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);
router.put('/reviews/:id', isLoggedIn, reviewsCtrl.update);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;

