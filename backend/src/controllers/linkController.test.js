const Link = require('../models/linkModel');
const linkController = require('./linkController');

jest.mock('../models/linkModel');
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
describe('When createFolder is invoked', () => {
  test('Should call res.status', () => {
    linkController.createLink(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('When createFolder is invoked', () => {
  test('Should call res.status 500', async () => {
    const newFolder = new Link({});

    newFolder.save.mockImplementationOnce(() => {
      throw new Error();
    });

    await linkController.createLink(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});
