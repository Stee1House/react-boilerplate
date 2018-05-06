const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/User.js'),
    decrypt = require('./password.js').decrypt;

passport.use(new LocalStrategy({usernameField: 'login', passwordField: 'password'}, (username, password, done) => {
    
    User.findAll({
        attributes: ['id', 'login', 'password', 'first_name', 'middle_name', 'last_name'],
        where: {
            login: username
        }
    }).then((queryData) => {
    
        if (!queryData.length) {
            return done(new Error('Not found user'), '', 'Not found user');
        }
        
        let passwordUser = queryData[0].get('password'), user = queryData[0].get();
        
        if (password === decrypt(passwordUser)) {
            return done(null, user);
        }

        return done(null, false, { message: 'Incorrect password.' })

    }).catch((error) => {
        return done(error);
    });
}));

passport.serializeUser((user, done) => {
    done(null, JSON.stringify({
        id: user.id,
        first_name: user.first_name,
        second_name: user.second_name,
        middle_name: user.middle_name
    }));
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

module.exports = passport;