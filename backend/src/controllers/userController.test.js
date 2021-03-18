// const supertest = require('supertest');
// const md5 = require('md5');
const User = require('../models/userModel');
const { userInfo } = require('./userController');
// const app = require('../../server');

// describe('Given a /user/me endpoint', () => {
//   test('Should get user when exists', async () => {
//     const request = supertest(app);

//     const existingUser = new User({
//       userName: 'User name',
//       email: 'user@user.com',
//       password: md5('user'),
//       registeredAt: [2021, 12, 21],
//       photoURL: 'https://avatars..svg'
//     });

//     existingUser.save();

//     const loginResponse = await request.post('/auth/login')
// .send({ email: 'user@user.com', password: 'user' });
//     const res = await request.get('/user/me').set('cookie', loginResponse.headers['set-cookie']);

//     expect(res.status).toBe(200);
//     expect(res.body.userName).toBe('User name');
//     expect(res.body.email).toBe('user@user.com');
//     expect(res.body.photoURL).toBe('https://avatars..svg');
//   });
// });

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

      userInfo(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
