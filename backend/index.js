const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const { connect } = require('mongoose');
const cors = require('cors');

const authRouter = require('./src/routes/authRouter');
const userRouter = require('./src/routes/userRouter');
const groupRouter = require('./src/routes/groupRouter');

// const skyHost = 'http://192.168.0.33';
const homeHost = 'http://192.168.1.26';

const app = express();
const port = process.env.PORT || 5000;

connect(
  'mongodb+srv://admin:admin@cluster0.xqkix.mongodb.net/wag',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.use(cors({ credentials: true, origin: 'http://localhost:19006' }));

app.use(express.json());
app.use(morgan('dev'));
app.disable('etag');

require('./src/passport')(app);

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/groups', groupRouter);

app.listen(port, () => {
  debug(`Server runing in ${chalk.green(`${homeHost}:${port}`)}`);
});
