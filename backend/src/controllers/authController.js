const md5 = require('md5');
const User = require('../models/userModel');

function Auth() {
  function register(req, res) {
    const { email, password } = req.body;
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');

    User.findOne({ email }, (error, user) => {
      if (user !== null) {
        res.send('exist');
        res.status(203);
      } else {
        const newUser = new User({
          email,
          password: md5(password),
          registeredAt: [year, month, day]
        });

        try {
          newUser.save();
          res.send('Hi');
          res.status(201);
        } catch {
          res.send('Oops');
          res.status(500);
        }
      }
    });
  }

  function login(req, res) {
    res.status(200);
    res.json(req.body);
  }

  function logout(req, res) {
    req.logout();
    res.status(200);
    res.send();
  }

  return {
    register,
    login,
    logout
  };
}

module.exports = Auth();
