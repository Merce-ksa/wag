const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../../models/userModel');

function LocalStrategy() {
  passport.use(
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      (email, password, done) => {
        User.findOne({ email }, (err, user) => {
          if (err) {
            console.log(`si no lo encuentra: ${err}`);
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    )
  );
}

module.exports = LocalStrategy;
