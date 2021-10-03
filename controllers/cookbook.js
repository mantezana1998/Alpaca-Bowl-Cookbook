const Recipe = require('../models/recipe');

module.exports = {
    all: allRecipe,
    show
};

function allRecipe(req, res){
    res.render('cookbook/index');
}

function show(req, res){
    res.send('Show function message')
}

// function index(req, res){
//     Recipe.find({}, function (err, chefDoc) {
//         console.log(req.body, "<- chefDocument")
//         res.render('cookbook/index', {
//         });
//     })
// }