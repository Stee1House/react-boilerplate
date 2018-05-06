const express = require('express'),
    Item = require('../models/Item.js'),
    router = express.Router({mergeParams: true});

router.get('/:id', (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    Item.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (item) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ item }));
        
    }, (error) => {
        res.send(error);
    });
    
});


router.get('/', (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    Item.findAll().then(function (items) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            result_count: items.length,
            items
        }));
    }, (error) => {
        res.send(error);
    });
});

router.post('/', (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    Item.create({
        name: req.body.name
    }).then(function (item) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(item.dataValues));
    }, (error) => {
        res.send(error);
    });
});

router.delete('/:id', (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    Item.destroy({
        where: {
            id: req.params.id
        }
    }).then(()=> {
        res.send(JSON.stringify({
            id: req.params.id,
            status: 'success'
        }));
    }, (error) => {
        res.send(JSON.stringify({
            status: 'error'
        }));
    });
});

router.put('/:id', (req, res) => {
    
    if (!req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    Item.update(
        {name: req.body.value},
        { where: { id: req.params.id } }
    ).then(() => {
        Item.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (item) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(item[0]));
        })
    }, (error) => {
        res.send(error);
    });

});


module.exports = router;