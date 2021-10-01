const Chef = require('../models/chef');

module.exports = {
    // all: allRecipes,
    // show
    index
};

function index(req, res){
    Chef.find({}, function (err, chefDoc) {
        console.log(chefDoc, "<- chefDocument")
    //     res.render('cookbook/index', {
    //     })
    // });
    });

// function allRecipes(req, res){
//     res.render('cookbook/show');
// };

