module.exports = {
    up(queryInterface, Sequelize) {
        
        return queryInterface.createTable(
            'users',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                first_name: Sequelize.STRING,
                middle_name: Sequelize.STRING,
                last_name: Sequelize.STRING,
                login: Sequelize.STRING,
                password: Sequelize.STRING,
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                }
            }
        ).then(() => {
            return queryInterface.createTable(
                'categories',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                    },
                    name: Sequelize.STRING,
                    description: Sequelize.STRING
                }
            )
        }).then(() => {
            return queryInterface.createTable(
                'items',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    created_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                    },
                    updated_at: {
                        type: Sequelize.DATE,
                        allowNull: false,
                        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
                    },
                    name: Sequelize.STRING,
                    description: Sequelize.STRING,
                    user_id: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'users',
                            key: 'id'
                        },
                        onUpdate: 'cascade',
                        onDelete: 'cascade'
                    },
                }
            );
        }).then(() => {
            return queryInterface.createTable(
                'items_categories',
                {
                    item_id: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'items',
                            key: 'id'
                        },
                        onUpdate: 'cascade',
                        onDelete: 'cascade'
                    },
                    category_id: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'categories',
                            key: 'id'
                        },
                        onUpdate: 'cascade',
                        onDelete: 'cascade'
                    },
                    
                }
            )
        }).then(() => {
            return queryInterface.createTable(
                'sub_categories',
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: Sequelize.STRING,
                    description: Sequelize.STRING,
                    parent_category_id: {
                        type: Sequelize.INTEGER,
                        references: {
                            model: 'categories',
                            key: 'id'
                        },
                        onUpdate: 'cascade',
                        onDelete: 'cascade'
                    },
                }
            )
        })
        
    },
    down(queryInterface, Sequelize)        {
        return queryInterface.dropAllTables();
    }
};
