const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    chefFirst: String,
    chefLast: String,
    description: String, 
    rating: Number
})

const recipeSchema = mongoose.Schema ({
    recipe: String,
    slug: String,
    ingredient: String,
    instruction: String,
    description: String,
    review: [reviewSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);