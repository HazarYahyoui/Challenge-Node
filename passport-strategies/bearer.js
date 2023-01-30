const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt= require('jsonwebtoken');
const Auth = require('../models/authentification');

passport.use(new BearerStrategy(
    function(token, done) {
        const decodecToken= jwt.verify(token, process.env.Secret_Key);
      Auth.findOne( decodecToken.id ,  (err, user)=> {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
  ));