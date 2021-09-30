const mongoose = require('mongoose');

// Create your User Model

const reviewSchema = new mongoose.Schema ({
    review: String,
    rating: Number //WHAT THE FUCK IS GOING ON 
});

module.exports = mongoose.model('Review', reviewSchema);

