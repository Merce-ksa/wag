const debug = require('debug')('app');
const app = require('./server');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  debug('Server running');
});

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  next();
});

module.exports = app;
