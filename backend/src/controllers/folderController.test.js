const Folder = require('../models/folderModel');
const folderController = require('./folderController');

jest.mock('../models/folderModel');

describe('Given a FolderController function', () => {
  let req;
  let res;

  describe('When getAllFolders is invoked', () => {
    beforeEach(() => {
      req = {
        params: {
          groupId: 'FL359142021318'
        }
      };

      res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn()
      };
    });

    test('Should call res.status 500 when return error', () => {
      Folder.find.mockImplementationOnce((query, callback) => callback(true));

      folderController.getAllFolders(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });

    test('Should call res.status 200', () => {
      Folder.find.mockImplementationOnce((query, callback) => callback(false));

      folderController.getAllFolders(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('When createFolder is invoked', () => {
    beforeEach(() => {
      req = {
        body: {
          groupId: 'GR359142021318',
          name: 'Group name',
          members: 'red'
        }
      };

      res = {
        send: jest.fn(),
        status: jest.fn()
      };
    });

    test('Should call res.status', () => {
      folderController.createFolder(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('When createFolder is invoked', () => {
    test('Should call res.status 500', async () => {
      const newFolder = new Folder({});

      newFolder.save.mockImplementationOnce(() => {
        throw new Error();
      });

      await folderController.createFolder(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
