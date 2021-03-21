const passport = require('passport');
require('./strategies/localStrategy')();
const session = require('express-session');

function PassportConfig(app) {
  app.use(session({
    secret: 'abcdefg',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Almacenar user en la sesión
  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user);
  });

  // Recuperar user de la sesión
  passport.deserializeUser((user, done) => {
    console.log(user);
    done(null, user);
  });
}

module.exports = PassportConfig;
