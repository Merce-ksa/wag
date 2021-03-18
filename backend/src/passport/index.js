const passport = require('passport');
require('./strategies/localStrategy')();
const session = require('express-session');

function PassportConfig(app) {
  app.use(session({
    secret: 'abcdefg',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Almacenar user en la sesión
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Recuperar user de la sesión
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = PassportConfig;
