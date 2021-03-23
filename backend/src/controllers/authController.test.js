const authController = require('./authController');

describe('Given a Login function', () => {
  const req = {};
  const res = {
    status: jest.fn(),
    json: jest.fn()
  };
  describe('When is invoke with email and password', () => {
    test('Should response with 200', () => {
      authController.login(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe('Given a logout function', () => {
  const req = {
    logout: jest.fn()
  };
  const res = {
    status: jest.fn(),
    send: jest.fn()
  };

  xdescribe('When invoked with email and password credentials', () => {
    test('Should response with 200', () => {
      authController.logout(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
