const Recipe = require('../models/recipe');

module.exports = {
    create: createReview,
    delete: deleteReview,
    update: updateReview
};


function createReview (req, res) {
    Recipe.findById(req.params.id, function(err, recipe){
        if(err){
            return res.send(err)
        }
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        recipe.review.push(req.body);
        recipe.save(function(err){
            res.redirect(`/cookbook/${recipe._id}`)
        });
    });
}

function deleteReview(req, res){
    Recipe.findOne({'review._id':req.params.id}, function(err, recipe){
        const reviewSubdoc = recipe.review.id(req.params.id);
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
        reviewSubdoc.description = req.body.description;
        reviewSubdoc.rating = parseInt(req.body.rating);
        recipe.save(function(err){
            res.redirect(`/cookbook/${recipe._id}`);
        });
    });
}