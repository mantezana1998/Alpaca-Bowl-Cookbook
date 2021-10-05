const Recipe = require('../models/recipe');

module.exports = {
    create
};

function create (req, res) {
    console.log(req.body, '<-- req.body')
    console.log(req.params, "<-- req.paramssssss")
    Recipe.findOne({id:req.params.id}, function(err, recipe){
        if(err){
            console.log(err)
            return res.send(err)
        }
        console.log(recipe, "<-- recipeeeeeee")
        recipe.review.push(req.body);
        recipe.save(function(err){
            res.redirect(`/cookbook/${req.params.id}`)
        })
    })
}