const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Chef = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Chef.findOne({"googleId": profile.id}, function(err, chefDocument){
      if(err) return cb(err);

      if(chefDocument){
        return cb(null, chefDocument)
      }else{
        const newChef = new Chef({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        
        newChef.save(function(err){
          if(err) return cb(err);
          return cb(null, newChef);
        })

      }
    });
  }
));

passport.serializeUser(function(chef, done) {
  done(null, chef.id);
});

passport.deserializeUser(function(id, done) {
  Chef.findById(id, function(err, chefDocument){
    done(err, chefDocument);
  })
});



