const debug = require('debug')('app');
const chalk = require('chalk');

const app = require('./server');

const host = 'http://192.168.1.26';
const port = process.env.PORT || 5000;

app.listen(port, () => {
  debug(`Server runing in ${chalk.green(`${host}:${port}`)}`);
});

module.exports = app;
