const Recipe = require('../models/recipe');

module.exports = {
    // index
    all: allRecipe
};

function allRecipe(req, res){
    res.render('cookbook/index');
}

// function index(req, res){
//     Recipe.find({}, function (err, chefDoc) {
//         console.log(req.body, "<- chefDocument")
//         res.render('cookbook/index', {
//         });
//     })
// }