const User = require('../models/userModel');

function UserController() {
  function userInfo(req, res) {
    User.findOne({ email: req.user.email }, (error, user) => {
      if (error) {
        res.status(500);
        res.send('There was an error finding user');
      } else {
        res.status(200);
        res.json(user);
      }
    });
  }

  return {
    userInfo
  };
}

module.exports = UserController();
