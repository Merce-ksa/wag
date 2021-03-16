const { Router } = require('express');
const { userInfo } = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router
    .route('/me')
    .get(userInfo);

  return router;
}

module.exports = UserRouter();
