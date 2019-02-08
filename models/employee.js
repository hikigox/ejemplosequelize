'use strict';

//Modelo de Employee
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            options: {
                operatorsAliases: false
            }

        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
            options: {
                operatorsAliases: false
            }

        },


        // En este campo existe algo llamado Number, que en el ejemplo se usa pero cuando lo implementamos nos saca un error y tiene que ver cuando el sequelize no encuentra un tipo de dato, en este caso se opto por el decimal que hace algo parecido 
        salary: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isDecimal: true

            }



        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,


        },
    }, {});
    Employee.associate = function(models) {
        // associations can be defined here

        // Como en company se llama un metodo para la relaciones que tenga con otra tabla, como ya sabemos (para mejor entendimiento mirar primero el modelo de company) company tiene un metodo que le dice que tiene muchos employees, mas no es que el tenga la llave foranea. Ya que la que la tiene son los employees y por eso el metodo cambia , este metodo dice en espanol pertenece a y lo que hace es decir que este modelo es el que va tener la llave foranea.
        Employee.belongsTo(models.Company, {
            foreignKey: 'companyId',
            // este campo para recordar son los diferentes metodos que puede realizar una base de datos delete,update y create . Hay diferentes formas de utilizar estos, el caso de cascade es el que cuando hay un cambio en una tabla la cual tenga una llave foranea, esta haga los cambios en todas las tablas que tienen relacion con esa tabla cambiada.

            onDelete: 'CASCADE'


        });
    };
    return Employee;
};