const Recipe = require('../models/recipe');

module.exports = {
    all: allLand
};

function allLand(req, res){
    res.render('cookbook/land');
}