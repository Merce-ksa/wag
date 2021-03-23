const Link = require('../models/linkModel');
const linkController = require('./linkController');

jest.mock('../models/linkModel');

describe('Given a linkController function', () => {
  describe('When createLink is invoked', () => {
    let req;
    let res;

    beforeEach(() => {
      req = {
        body: {
          folderId: 'FR359142021318',
          name: 'Link name',
          tag: 'tool'
        }
      };

      res = {
        send: jest.fn(),
        status: jest.fn()
      };
    });

    test('Should call res.status', () => {
      linkController.createLink(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test('Should call res.status 500', async () => {
      const newFolder = new Link({});

      newFolder.save.mockImplementationOnce(() => {
        throw new Error();
      });

      await linkController.createLink(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  xdescribe('When getAllLinks is invoked', () => {
    let req;
    let res;

    beforeEach(() => {
      req = {
        params: {
          groupId: 'Lk359142021318'
        }
      };

      res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn()
      };
    });

    test('Should call res.status 500 when return error', () => {
      const query = { folderId: 'id' };

      Link.find.mockImplementationOnce(query, null, {}, (callback) => callback(true));

      linkController.getAllLinks(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });

    test('Should call res.status 200', () => {
      Link.find.mockImplementationOnce((query, callback) => callback(false));

      linkController.getAllLinks(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
