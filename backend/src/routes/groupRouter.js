const { Router } = require('express');
const { getAllGroups, createGroup } = require('../controllers/groupController');

function GroupRouter() {
  const router = Router();

  router
    .route('/')
    .get(getAllGroups)
    .post(createGroup);

  return router;
}

module.exports = GroupRouter();
