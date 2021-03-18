const User = require('../models/userModel');

function UserController() {
  function userInfo(req, res) {
    User.findOne({ email: req.user.email }, (error, user) => {
      res.status(200);
      res.json(user);
    });
  }

  return {
    userInfo
  };
}

module.exports = UserController();
