const { getAllGroups } = require('./groupController');
const Group = require('../models/groupModel');

describe('Given a groupController function', () => {
  describe('When is invoqued', () => {
    test('Should call json on createGroup', () => {
      const mockReq = {
        user: {
          email: 'user@user.com'
        }
      };
      const mockRes = {
        send: jest.fn(),
        status: jest.fn()
      };

      Group.find.mockImplementationOnce(({ members: 'user@user.com' }, callback) => callback(true));

      getAllGroups(mockReq, mockRes);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
