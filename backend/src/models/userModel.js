const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  description: String,
  photoURL: String,
  registeredAt: []
});

module.exports = model('User', userSchema);
