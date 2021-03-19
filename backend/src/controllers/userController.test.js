const User = require('../models/userModel');
const UserController = require('./userController');

jest.mock('../models/userModel');
describe('Given a UserController function', () => {
  describe('When is invoked', () => {
    test('Should call json on userInfo ', () => {
      const req = {
        user: {
          email: 'user@user.com'
        }
      };

      const res = {
        status: jest.fn(),
        json: jest.fn()
      };

      User.findOne.mockImplementationOnce((query, callback) => callback(true));

      UserController.userInfo(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
