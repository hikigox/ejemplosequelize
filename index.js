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

//Token
const jwt = require('./token/tokens');

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
let payload = {
    name: 'Fernando',
    apellido: 'Herrera',
    correo: 'fernandoherrera@gmail.com',
    cedula: 465462356,
    telefono: 3254367653,

};
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiRmVybmFuZG8iLCJhcGVsbGlkbyI6IkhlcnJlcmEiLCJjb3JyZW8iOiJmZXJuYW5kb2hlcnJlcmFAZ21haWwuY29tIiwiY2VkdWxhIjo0NjU0NjIzNTYsInRlbGVmb25vIjozMjU0MzY3NjUzfQ.MHLfwy1FvneuHTWGz3P34Y_nlkbfoQBKa2ZqgQHQmtg';
//Crear Token
// jwt.crearToken(payload);

//leer token
jwt.getToken(token);
module.exports = app;