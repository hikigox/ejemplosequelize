'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Employees', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            designation: {
                type: Sequelize.STRING
            },
            salary: {
                type: Sequelize.DECIMAL(10, 2)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            companyId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                reference: {
                    model: 'Companies',
                    key: 'id',
                    as: 'companyId'

                },



            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Employees');
    }
};