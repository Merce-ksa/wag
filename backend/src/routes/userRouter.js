const { Router } = require('express');

function UserRouter() {
  const router = Router();

  router
    .route('./');

  return router;
}

module.exports = UserRouter();
