const Chef = require('../models/chef');

module.exports = {
    new: newRecipe
};

function newRecipe(req, res){
    res.render('index');
};