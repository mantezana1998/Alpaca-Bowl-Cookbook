const Recipe = require('../models/recipe');

module.exports = {
    all: allRecipe,
    show
};

function allRecipe(req, res){
    res.render('cookbook/index');
}

function show(req, res){
    Recipe.find({}, function(err, recipe){
       console.log(recipe, '<- recipe');
       res.render('cookbook/show', {
           recipeForCookbook: recipe
       }); 
    });
}

