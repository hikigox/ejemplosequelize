'use strict';

// modelo de company
module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    }, {});
    Company.associate = function(models) {
        // associations can be defined here
        // en esta parte se escribe las relaciones que puedan tener las diferentes tablas, en este ejemplo fue de uno a muchos, en este caso el metodo que se usa es el hasmany, que lo que quiere decir es que va hacer la referencia a la otra tabla
        Company.hasMany(models.Employee, {
                foreignKey: 'companyId',
                as: 'employees'
            })
            // esta parte es la relacion que se tiene, mas no especifica que esta va tener llave foranea.
    };
    return Company;
};