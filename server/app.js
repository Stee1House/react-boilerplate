const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sessionMiddleware = require('./session');
const passport = require('./auth/passport.js');
const items = require('./api/items');
const user = require('./api/user');

app.use(logger('dev'));

app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

const api = express();

app.use('/api', api);

api.use('/items', items);
api.use('/user', user);

app.get('*', (req, res) => {
     return res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

module.exports = app;