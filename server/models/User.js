const Sequelize = require('sequelize'),
    sequelize = require('../db/connection.js');

const User = sequelize.define('users', {
    login: {
        type: Sequelize.STRING,
        field: 'login'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    first_name: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    middle_name: {
        type: Sequelize.STRING,
        field: 'middle_name'
    },
    last_name: {
        type: Sequelize.STRING,
        field: 'last_name'
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = User;
