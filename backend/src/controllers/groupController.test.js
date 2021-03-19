const Group = require('../models/groupModel');
const groupController = require('./groupController');

jest.mock('../models/groupModel');

describe('Given a GroupController function', () => {
  describe('When getAllGroups is invoked', () => {
    test('Should call res.status 500 when return error', () => {
      const req = {
        user: {
          email: 'user@user.com'
        }
      };

      const res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn()
      };

      Group.find.mockImplementationOnce((query, callback) => callback(true));

      groupController.getAllGroups(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });

    test('Should call res.status 200', () => {
      const req = {
        user: {
          email: 'user@user.com'
        }
      };

      const res = {
        send: jest.fn(),
        json: jest.fn(),
        status: jest.fn()
      };

      Group.find.mockImplementationOnce((query, callback) => callback(false));

      groupController.getAllGroups(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('When createGroup is invoked', () => {
    test('Should call res.status', () => {
      const req = {
        body: {
          name: 'Group name',
          members: 'user@user.com'
        }
      };

      const res = {
        status: jest.fn(),
        send: jest.fn()
      };

      groupController.createGroup(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('When createGroup is invoked', () => {
    test('Should call res.status 500', async () => {
      const req = {
        body: {
          name: 'Group name',
          members: 'user@user.com'
        }
      };

      const res = {
        status: jest.fn(),
        send: jest.fn()
      };

      const newGroup = new Group({});

      newGroup.save.mockImplementationOnce(() => {
        throw new Error();
      });

      await groupController.createGroup(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
