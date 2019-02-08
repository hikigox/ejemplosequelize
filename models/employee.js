'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        salary: DataTypes.DECIMAL(10, 2)
    }, {});
    Employee.associate = function(models) {
        // associations can be defined here
        Employee.belongsTo(models.Company, {
            foreignKey: 'companyId',
            onDelete: 'CASCADE'


        });
    };
    return Employee;
};