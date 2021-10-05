const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteComment
};


function create (req, res) {
    // console.log(req.body, '<-- req.body')
    // console.log(req.params, "<-- req.paramssssss")
    Recipe.findById(req.params.id, function(err, recipe){
        if(err){
            console.log(err)
            return res.send(err)
        }
        // console.log(recipe, "<-- recipeeeeeee")
        recipe.review.push(req.body);
        recipe.save(function(err){
            res.redirect(`/cookbook/${req.params.id}`)
        });
    });
}

function deleteComment(req, res){
    // console.log(req, "<-- My req.body")
    Recipe.findById({'review._id':req.params.id}, function(err, recipe){
        console.log(recipe, "<-recipee")
        const reviewSubdoc = recipe.review.id(req.params.id);
        console.log(reviewSubdoc, '<-- review subdoc');
        if(!reviewSubdoc.userId.equals(req.user._id)){
            return res.redirect(`/cookbook/${recipe._id}`)
        };
        reviewSubdoc.remove();
        recipe.save(function(err){
            res.redirect(`/cookbook/${recipe._id}`,{
                recipe: reviewSubdoc  
            });
        });
    });
}