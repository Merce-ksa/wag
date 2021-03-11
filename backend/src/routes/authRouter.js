const { Router } = require('express');
const passport = require('passport');
const { register, login } = require('../controllers/authController');

function AuthRouter() {
  const router = new Router();

  router
    .post('/register', register);

  router
    .route('/login')
    .post(
      passport.authenticate('local'), login
    );

  return router;
}

module.exports = AuthRouter();
