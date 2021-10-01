const Recipe = require('../models/recipe');

module.exports = {
    all: allSea
};

function allSea(req, res){
    res.render('cookbook/sea');
}