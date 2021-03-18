const { Router } = require('express');
// const ensureLogin = require('connect-ensure-login');
const { getAllFolders, createFolder } = require('../controllers/folderController');

function FolderRouter() {
  const router = Router();

  router
    .route('/')
    // .get(ensureLogin.ensureLoggedIn(), getAllFolders)
    .get(getAllFolders)
    .post(createFolder);

  return router;
}

module.exports = FolderRouter();
