const md5 = require('md5');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  userName: String,
  description: String,
  photoURL: String,
  registeredAt: []
});

userSchema.methods.validPassword = function (pwd) {
  return (this.password === md5(pwd));
};

module.exports = model('User', userSchema);
