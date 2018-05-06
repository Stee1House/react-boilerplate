const Sequelize = require('sequelize'),
      sequelize = require('../db/connection.js');

const Item = sequelize.define('items', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    
    description: {
        type: Sequelize.STRING,
        field: 'description'
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Item;
