const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    name: String,
    description: String, 
    rating: Number,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const recipeSchema = mongoose.Schema ({
    recipe: String,
    slug: String,
    ingredient: String,
    instruction: String,
    description: String,
    review: [reviewSchema],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Recipe', recipeSchema);