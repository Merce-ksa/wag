const md5 = require('md5');
const User = require('../models/userModel');

function Auth() {
  function register(req, res) {
    const { email, password } = req.body;
    const user = new User({
      email,
      password: md5(password)
    });

    try {
      user.save();
      res.status(200);
      res.send('Holaaa');
      //   req.login(user, () => {
      // res.redirect({
      //   successRedirect: '/user',
      //   failureRedirect: '/login',
      //   failureFlash: true
      // });
      //   });
    } catch (error) {
      res.status(500);
      res.send(error);
      res.send('estopetaaaa');
    }
  }

  function login(req, res) {
    res.status(200);
    res.json(req.body);
  }

  return {
    register,
    login
  };
}

module.exports = Auth();
