const { Schema, model } = require('mongoose');

const folderSchema = new Schema({
  folderId: String,
  groupId: String,
  name: String,
  color: String,
  createdAt: Date
});

module.exports = model('Folder', folderSchema);
