const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
  groupId: String,
  members: [],
  name: String,
  date: String
});

module.exports = model('Group', groupSchema);
