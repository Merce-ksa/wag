const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('mongoose');
const userRouter = require('./src/routes/userRouter');

const app = express();
const port = process.env.PORT || 5000;
const skyHost = 'http://192.168.0.33';

connect('mongodb+srv://admin:admin@cluster0.xqkix.mongodb.net/wag', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.listen(port, () => {
  debug(`Server runing in ${chalk.green(`${skyHost}:${port}`)}`);
});
