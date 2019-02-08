const express = require('express');

const logger = require('morgan');

const bodyParse = require('body-parser');


// esta es la entrada a la aplicacion , aqui configuramos el servidor
const http = require('http');

// Instancia de express

const app = express();

//Puerto del Servidor
const puerto = require('./global/enviroment');
// Las peticiones por consola

app.use(logger('dev'));


// Analizar las solicitudes

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({ extended: false }));



//Modelos
const models = require('./models');

// Sincronia con db
models.sequelize.sync().then(function() {
    console.log('La base de datos funciona');


}).catch(function(err) {
    console.log(err, 'Algo esta fallando, actulice la base de datos');


});

// Peticiones de routas a la aplicacion
require('./routes')(app);
//Peticion general para testear

app.get('*', (req, res) => res.status(200).send({

    message: 'Probando peticion Get'

}));

//Instanciar Servidor

const server = http.createServer(app);


// Ejecutar Servidor
server.listen(puerto.SERVER_PORT, () => {

    console.log('Servidor Incializado en el puerto:', puerto.SERVER_PORT);


});

module.exports = app;