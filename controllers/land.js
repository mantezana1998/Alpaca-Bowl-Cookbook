const Chef = require('../models/chef');

module.exports = {
    new: landPage
};

function landPage(req, res){
    res.send('word?');
};