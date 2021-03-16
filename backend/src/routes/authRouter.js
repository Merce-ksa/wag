const { Router } = require('express');
const passport = require('passport');
const { register, login, logout } = require('../controllers/authController');

function AuthRouter() {
  const router = new Router();

  router
    .route('/register')
    .post(register);

  router
    .route('/login')
    .post(
      passport.authenticate('local'), login
    );

  router
    .route('/logout')
    .post(logout);

  return router;
}

module.exports = AuthRouter();
