const expressSession = require('express-session');
const MySQLStore = require('express-mysql-session')(expressSession);
const config = require('config');
const dbConfig = config.get('server.dbConfig');
const sessionStore = new MySQLStore(dbConfig);
const session = expressSession({
    key: 'FrontSession',
    secret: 'cat-secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30 * 12
    }});

module.exports = session;