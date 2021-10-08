const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    name: String,
    description: String, 
    rating: Number,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const recipeSchema = new mongoose.Schema ({
    recipe: String,
    slug: String,
    ingredient: Array,
    instruction: Array,
    description: String,
    picture: String,
    review: [reviewSchema],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Recipe', recipeSchema);