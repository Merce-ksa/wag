const express = require('express');
const debug = require('debug')('app');
const cors = require('cors');
const { connect } = require('mongoose');
const session = require('express-session');
const chalk = require('chalk');
const userRouter = require('./src/routes/userRouter');
const authRouter = require('./src/routes/authRouter');

// const skyHost = 'http://192.168.0.33';
const homeHost = 'exp://192.168.1.26';

const app = express();
const port = process.env.PORT || 5000;

connect(
  'mongodb+srv://admin:admin@cluster0.xqkix.mongodb.net/wag',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());

require('./src/passport')(app);

app.use(session({ secret: 'wag directory' }));

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  debug(`Server runing in ${chalk.green(`${homeHost}:${port}`)}`);
});
