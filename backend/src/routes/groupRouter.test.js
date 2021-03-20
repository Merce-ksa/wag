const supertest = require('supertest');
const md5 = require('md5');
const User = require('../models/userModel');
const Group = require('../models/groupModel');
const app = require('../../server');

xdescribe('Given a /groups endpoint', () => {
  test('Should get empty groups when user does not have groups', async () => {
    const request = supertest(app);
    const email = `${Math.random().toString(36).substring(7)}@user.com`;

    const existingUser = new User({
      userName: 'User name',
      email,
      password: md5('user'),
      registeredAt: [2021, 12, 21],
      photoURL: 'https://avatars..svg'
    });

    existingUser.save();

    // Esto es como mi postMan
    const loginResponse = await request.post('/auth/login').send({ email, password: 'user' });
    const res = await request.get('/groups').set('cookie', loginResponse.headers['set-cookie']);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('Should get groups when user has groups', async () => {
    const request = supertest(app);
    const email = `${Math.random().toString(36).substring(7)}@user.com`;
    const existingUser = new User({
      userName: 'User name',
      email,
      password: md5('user'),
      registeredAt: [2021, 12, 21],
      photoURL: 'https://avatars..svg'
    });

    existingUser.save();

    const group1 = new Group({
      groupId: 'GR2021313110310',
      members: [email, 'user2@user.com'],
      name: 'Group name',
      date: '2021313'
    });

    group1.save();

    // Esto es como mi postMan
    const loginResponse = await request.post('/auth/login').send({ email, password: 'user' });
    const res = await request.get('/groups').set('cookie', loginResponse.headers['set-cookie']);
    console.log(res.body);

    expect(res.status).toBe(200);
    expect(res.body[0].groupId).toEqual('GR2021313110310');
  });
});
