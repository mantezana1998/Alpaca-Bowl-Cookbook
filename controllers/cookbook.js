const Recipe = require('../models/recipe');

module.exports = {
    all: allRecipe,
    show
};

function allRecipe(req, res){
    res.render('cookbook/index');
}

function show(req, res){
    Recipe.findOne({slug:req.params.slug}, function(err, recipe){
        // console.log(req.params.slug, '<---- slug id');
        // console.log(recipe.recipe, '<---- recipe');
        // console.log(recipe, "recipeeeeeee");
        // console.log(typeof recipe, "<-- type of");
        res.render('cookbook/show', {
           recipe: recipe,
           slug: req.params.slug
       }); 
    });
}

