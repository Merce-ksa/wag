const { Router } = require('express');
const ensureLogin = require('connect-ensure-login');
const { createLink, getAllLinks } = require('../controllers/linkController');

function LinkRouter() {
  const router = Router();

  router
    .route('/')
    .post(createLink);

  router
    .route('/:folderId')
    .get(ensureLogin.ensureLoggedIn(), getAllLinks);

  return router;
}

module.exports = LinkRouter();
