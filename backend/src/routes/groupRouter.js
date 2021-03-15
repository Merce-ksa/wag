const { Router } = require('express');
const ensureLogin = require('connect-ensure-login');
const { getAllGroups, createGroup } = require('../controllers/groupController');

function GroupRouter() {
  const router = Router();

  router
    .route('/')
    .get(ensureLogin.ensureLoggedIn(), getAllGroups)
    .post(createGroup);

  return router;
}

module.exports = GroupRouter();
