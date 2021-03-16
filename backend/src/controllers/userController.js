const User = require('../models/userModel');

function UserController() {
  // function registerUser(req, res) {
  //   const foundUser = User.find({ email: req.body.email });

  //   if (foundUser.lenght) {
  //     res.json(req.body);
  //   } else {
  //     const { email, password } = req.body;
  //     const newUser = new User({
  //       email,
  //       password: md5(password)
  //     });
  //     newUser.save((error) => {
  //       if (error) {
  //         res.status(404);
  //         res.send('No se ha podido crear el usuario');
  //       } else {
  //         res.json(newUser);
  //       }
  //     });
  //   }
  // }

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
