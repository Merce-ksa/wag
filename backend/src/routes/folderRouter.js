const { Router } = require('express');
const ensureLogin = require('connect-ensure-login');
const { getAllFolders, createFolder } = require('../controllers/folderController');

function FolderRouter() {
  const router = Router();

  router
    .route('/')
    .post(createFolder);

  router
    .route('/:groupId')
    .get(ensureLogin.ensureLoggedIn(), getAllFolders);

  return router;
}

module.exports = FolderRouter();
