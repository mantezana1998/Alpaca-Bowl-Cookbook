const Recipe = require('../models/recipe');

module.exports = {
    index,
    show
};

function index (req, res){
    Recipe.find({}, function(err, recipeDocuments){
        res.render('cookbook/index', {
            recipe: recipeDocuments
        });
    });
}

function show(req, res){
    Recipe.findById(req.params.id, function(err, recipe){
        res.render('cookbook/show', {
           recipe: recipe,
           id: req.params.id,
       }); 
    });
}

