const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const cors = require('cors');

const authRouter = require('./src/routes/authRouter');
const userRouter = require('./src/routes/userRouter');
const groupRouter = require('./src/routes/groupRouter');
const folderRouter = require('./src/routes/folderRouter');
const linkRouter = require('./src/routes/linkRouter');

const app = express();

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
app.use('/folder', folderRouter);
app.use('/link', linkRouter);

module.exports = app;
