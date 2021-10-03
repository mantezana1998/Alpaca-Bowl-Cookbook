const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema ({
    name: String,
    email: String,
    cookingExperience: String,
    googleId: String
});

module.exports = mongoose.model('Chef', chefSchema);