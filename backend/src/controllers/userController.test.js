const { userInfo } = require('./userController');
const User = require('../models/userModel');

describe('Given a UserController function', () => {
  describe('When is invoqued', () => {
    test('Should call json on userInfo', () => {
      const req = {
        user: {
          email: 'user@user.com'
        }
      };

      const res = {
        send: jest.fn(),
        status: jest.fn(),
        json: jest.fn()
      };

      User.findOne.mockReturnValueOnce((query, callback) => callback(true));
      userInfo(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
