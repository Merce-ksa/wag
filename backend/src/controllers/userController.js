const md5 = require('md5');
const User = require('../models/userSchema');

function UserController() {
  function registerUser(req, res) {
    const foundUser = User.find({ email: req.body.email });

    if (foundUser.lenght) {
      res.json(req.body);
    } else {
      const { email, password } = req.body;
      const newUser = new User({
        email,
        password: md5(password)
      });
      newUser.save((error) => {
        if (error) {
          res.status(404);
          res.send('No se ha podido crear el usuario');
        } else {
          res.json(newUser);
        }
      });
    }
  }

  //   function getUser(req, res) {
  //     User.findOne({ email: req.body.email }, (error, user) => {
  //       if (error) {
  //         res.status(404);
  //         res.send('No se ha podido encontrar el usuario');
  //       } else {
  //         res.json(user);
  //       }
  //     });
  //   }

  return {
    registerUser
  };
}

module.exports = UserController();
