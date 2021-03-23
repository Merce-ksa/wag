const md5 = require('md5');
const User = require('../models/userModel');

function Auth() {
  async function register(req, res) {
    const { userName, email, password } = req.body;

    User.findOne({ email }).then((user) => {
      if (user) {
        res.status(409);
        res.send();
      } else {
        const newUser = new User({
          userName,
          email,
          password: md5(password),
          registeredAt: new Date(),
          photoURL: `https://avatars.dicebear.com/api/gridy/${userName}/custom-happy.svg?colorful=1`
        });

        try {
          newUser.save();
          res.send('Hi');
          res.status(201);
          res.json(newUser);
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

    res.status(200)
      .clearCookie('connect.sid', { path: '/' })
      .send();
  }

  return {
    register,
    login,
    logout
  };
}

module.exports = Auth();
