const Folder = require('../models/folderModel');

function FolderController() {
  function generateId() {
    const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
    const [hour, minute, second] = new Date().toLocaleTimeString('en-US').split(/:| /);
    return `FL${hour}${minute}${second}${year}${month}${date}`;
  }

  function createFolder(req, res) {
    const { groupId, name, color } = req.body;

    const newFolder = new Folder({
      folderId: generateId(),
      groupId,
      name,
      color,
      createdAt: new Date().toDateString()
    });

    try {
      newFolder.save();
      res.send('New folder created');
      res.status(200);
    } catch {
      res.send('Oops! Folder could not be created');
      res.status(500);
    }
  }

  function getAllFolders(req, res) {
    const query = { groupId: req.params.groupId };

    Folder.find(query, (error, folders) => {
      if (error) {
        res.send(error);
        res.status(500);
      } else {
        res.status(200);
        res.json(folders);
      }
    });
  }
  return {
    getAllFolders,
    createFolder
  };
}

module.exports = FolderController();
