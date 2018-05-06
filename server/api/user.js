const express = require('express'),
    User = require('../models/User.js'),
    router = express.Router(),
    passport = require('../auth/passport.js'),
    encrypt = require('../auth/password.js').encrypt;

router.get('/me', (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    User.findOne({
        where: {
            id: req.session.passport.user.id
        }
    }).then(function (data) {
        res.setHeader('Content-Type', 'application/json');
        
        res.send(JSON.stringify({
            id: data.id,
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name
        }));
        
    }, (error) => {
        res.send(error);
    });
    
});

router.post('/login', (req, res, next) => {
    
    passport.authenticate('local',
        (err, user, info) => {
    
            if (err) {
                return res.status(401).send(info);
            }
    
            if (user) {
                return req.logIn(user, (err) => {
                    if (err) {
                        return res.status(401).send(err);
                    } else {
                        req.session.passport.user = {id: user.id};
    
                        return res.send(JSON.stringify({
                            id: user.id,
                            first_name: user.first_name,
                            middle_name: user.middle_name,
                            last_name: user.last_name
                        }));
                    }
                });
            }
    
            return res.status(401).end();
        }
    )(req, res, next);
    
});


router.get('/logout', (req, res) => {
    req.logOut();
    return res.status(200).end();
});


router.post('/registration', (req, res) => {
    
    User.findOne({
        where: {login: req.body.login}
    }).then(function (user) {
        
        if (user.length) {
            return res.send(JSON.stringify({message: 'User have created with that login -> ' + req.body.login}));
        }
        
        User.create({
            login: req.body.login,
            password: encrypt(req.body.password),
            first_name: req.body.first_name || 'John',
            middle_name: req.body.middle_name || '',
            last_name: req.body.last_name || 'Dow',
        }).then(function (user) {
            res.setHeader('Content-Type', 'application/json');
            return res.send(JSON.stringify({user}));
        });
        
    }).catch((error) => {
        return res.send(error);
    });
});


module.exports = router;