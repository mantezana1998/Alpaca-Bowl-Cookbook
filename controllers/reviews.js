const Recipe = require('../models/recipe');

module.exports = {
    create
};

function create (req, res) {
    console.log(req.body)
    Recipe.findById(req.params.id, function(err, recipe){
        if(err){
            console.log(err)
            res.send(err)
        }
        console.log(recipe)
        recipe.review.push(req.body);
        recipe.save(function(err){
            res.redirect(`/cookbook/${req.params.id}`)
        })
    })
}