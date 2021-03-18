const supertest = require('supertest');
const md5 = require('md5');
const User = require('../models/userModel');
const app = require('../../server');

describe('Given a /user/me endpoint', () => {
  test('Should get user when exists', async () => {
    const request = supertest(app);

    const existingUser = new User({
      userName: 'User name',
      email: 'user@user.com',
      password: md5('user'),
      registeredAt: [2021, 12, 21],
      photoURL: 'https://avatars..svg'
    });

    existingUser.save();

    // Esto es como mi postMan
    const loginResponse = await request.post('/auth/login').send({ email: 'user@user.com', password: 'user' });
    const res = await request.get('/user/me').set('cookie', loginResponse.headers['set-cookie']);

    // Creamos un usuario ficticio previamente:

    expect(res.status).toBe(200);
    expect(res.body.userName).toBe('User name');
    expect(res.body.email).toBe('user@user.com');
    expect(res.body.photoURL).toBe('https://avatars..svg');
  });
});
