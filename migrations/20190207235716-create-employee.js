'use strict';

//Querry de crear employee. En esta lo que se hace es todo el querry para crear employee

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
                type: Sequelize.FLOAT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            // Esto lo instanciamos de manera manuel y hace referencia a la llave foranea que va tener employees
            companyId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                reference: {
                    model: 'Companies',
                    key: 'id',
                    as: 'companyId'

                },
                allowNull: false



            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Employees');
    }
};