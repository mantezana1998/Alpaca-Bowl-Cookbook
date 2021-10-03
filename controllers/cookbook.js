const Recipe = require('../models/recipe');

module.exports = {
    all: allRecipe,
    show
};

function allRecipe(req, res){
    res.render('cookbook/index');
}

function show(req, res){
    Recipe.findById(req.params.id)
    .exec(function(err, recipe){
        console.log(recipe);
        res.render('cookbook/show');
    })
}