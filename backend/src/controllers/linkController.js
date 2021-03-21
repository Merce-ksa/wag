const Link = require('../models/linkModel');

function LinkController() {
  function generateId() {
    const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
    const [hour, minute, second] = new Date().toLocaleTimeString('en-US').split(/:| /);
    return `Lk${hour}${minute}${second}${year}${month}${date}`;
  }

  function createLink(req, res) {
    const {
      folderId, url, name, description, tag
    } = req.body;

    const newLink = new Link({
      linkId: generateId(),
      folderId,
      url,
      name,
      description,
      tag,
      createdAt: new Date().toDateString()
    });

    try {
      newLink.save();
      res.send('New link created');
      res.status(200);
    } catch {
      res.send('Oops! Link could not be created');
      res.status(500);
    }
  }

  function getAllLinks(req, res) {
    const query = { folderId: req.params.folderId };

    Link.find(query, (error, links) => {
      if (error) {
        res.status(500);
        res.send(error);
      } else {
        res.status(200);
        res.json(links);
      }
    });
  }
  return {
    getAllLinks,
    createLink
  };
}

module.exports = LinkController();
