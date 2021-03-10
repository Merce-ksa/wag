const { Router } = require('express');
const { registerUser } = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(registerUser);

  return router;
}

module.exports = UserRouter();
