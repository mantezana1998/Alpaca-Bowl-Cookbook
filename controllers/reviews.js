const Recipe = require('../models/recipe');

module.exports = {
    create: createReview,
    delete: deleteReview,
    update: updateReview
};


function createReview (req, res) {
    // console.log(req.body, '<-- req.body')
    // console.log(req.params, "<-- req.paramssssss")
    Recipe.findById(req.params.id, function(err, recipe){
        if(err){
            console.log(err)
            return res.send(err)
        }
        console.log(req.user,"<- REQ USER")
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        // console.log(recipe, "<-- recipeeeeeee")
        recipe.review.push(req.body);
        recipe.save(function(err){
            res.redirect(`/cookbook/${recipe._id}`)
        });
    });
}

function deleteReview(req, res){
    // console.log(req, "<-- My req.body")
    Recipe.findOne({'review._id':req.params.id}, function(err, recipe){
        // console.log(recipe, "<-recipee")
        const reviewSubdoc = recipe.review.id(req.params.id);
        // console.log(req.user)
        // console.log(reviewSubdoc, '<-- review subdoc');
        if(!reviewSubdoc.userId.equals(req.user._id)){
            return res.redirect(`/cookbook/${recipe._id}`)
        };
        reviewSubdoc.remove();
        recipe.save(function(err){
            res.redirect(`/cookbook/${recipe._id}`);
        });
    });
}

function updateReview(req, res){
    Recipe.findOne({'review._id': req.params.id}, function(err, recipe){
        const reviewSubdoc = recipe.review.id(req.params.id);
        if(!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/cookbook/${recipe._id}`);
        reviewSubdoc.review = req.body.review;
        Recipe.save(function(err){
            res.redirect(`/cookbook/${recipe._id}`);
        });
    });
}