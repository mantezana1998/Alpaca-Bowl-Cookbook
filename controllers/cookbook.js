const Recipe = require('../models/recipe');

module.exports = {
    index,
    show
};

function index (req, res){
    Recipe.find({}, function(err, recipeDocuments){
        console.log(recipeDocuments, "<---recipe documents");
        console.log(err, '<---erorrrrrrr')
        res.render('cookbook/index', {
            recipe: recipeDocuments
        });
    });
}

function show(req, res){
    Recipe.findById(req.params.id, function(err, recipe){
        // console.log(req.params.id, '<---- req.params id');
        // console.log(recipe.recipe, '<---- recipe');
        // console.log(recipe, "recipeeeeeee");
        // console.log(typeof recipe, "<-- type of");
        // console.log(err, "<---Error is here")
        res.render('cookbook/show', {
           recipe: recipe,
           id: req.params.id,
       }); 
    });
}

