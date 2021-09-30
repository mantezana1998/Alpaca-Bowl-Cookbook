const mongoose = require('mongoose');

// Create your User Model

const chefSchema = new mongoose.Schema ({
    name: String,
    email: String,
    cookingExperience: String,
    googleId: String
});

module.exports = mongoose.model('Chef', chefSchema);