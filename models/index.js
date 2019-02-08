'use strict';
// Esto lo genera el cli de sequelize.
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// esta instancia es importante , ya que lo que hace referencia es a algo que esta en la carpeta config y nos senala que base de datos va elegir ella dependiendo en que estado del desarrollo estemos.
// devido a que no se puede comentar un JSON aqui dejare la explicacion. En la carpeta config, la cual tiene un archivo json dentro es la configuracion de la base de datos que vamos a usar, tanto el tipo de base de datos a usar , el nombre de la base de datos,el usuario y contrasena. si nos fijamos bien en el json, este tiene diferentes instancias en la cual una de ellas tiene el nombre de "development", que es la que vamos a usar . 
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;