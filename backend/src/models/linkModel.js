const { Schema, model } = require('mongoose');

const linkSchema = new Schema({
  linkId: String,
  folderId: String,
  url: String,
  name: String,
  description: String,
  tag: String,
  createdAt: Date
});

module.exports = model('Link', linkSchema);
