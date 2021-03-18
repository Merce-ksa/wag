const Group = require('../models/groupModel');

function GroupController() {
  function generateId() {
    const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
    const [hour, minute, second] = new Date().toLocaleTimeString('en-US').split(/:| /);
    return `GR${year}${month}${date}${hour}${minute}${second}`;
  }

  function createGroup(req, res) {
    const { name, members } = req.body;

    const newGroup = new Group({
      groupId: generateId(),
      members,
      name,
      date: new Date().toDateString()
    });

    try {
      newGroup.save();
      res.send('New group created');
      res.status(200);
    } catch {
      res.send('Oops! Group could not be created');
      res.status(500);
    }
  }

  function getAllGroups(req, res) {
    const query = { members: req.user.email };

    Group.find(query, (error, groups) => {
      if (error) {
        res.send();
        res.status(500);
      } else {
        res.status(200);
        res.json(groups);
      }
    });
  }
  return {
    getAllGroups,
    createGroup
  };
}

module.exports = GroupController();
