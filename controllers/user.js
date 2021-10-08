const Chef = require('../models/user');

module.exports = {
  index,
  addFact
};


function addFact(req, res){
  req.user.facts.push(req.body);
  req.user.save(function(err){
    res.redirect('/user')
  })
}

function index(req, res, next) {
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Chef.find(modelQuery)
  .sort(sortKey).exec(function(err, chefs) {
    if (err) return next(err);
    res.render('chefs/index', {
      chefs,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}