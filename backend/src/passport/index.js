const passport = require('passport');
require('./strategies/localStrategy')();
const session = require('express-session');

function PassportConfig(app) {
  app.use(session({
    secret: 'abcdefg',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3000000 }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = PassportConfig;
