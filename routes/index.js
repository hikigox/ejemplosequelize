const companyController = require('../controllers').company;


// se crea un metodo exportable el cual pide como parametro el app, que es el servidor y ejecuta los diferentes peticiones, segun como lo pida el usuario.

module.exports = (app) => {

    // Parecido a la peticion general, pero en este caso es para cuando navegamos a /api
    app.get('/api', (req, res) => res.status(200).send({

        message: 'Bienvenido a el API!'
    }));

    //  Empeazar Crear ruta de company para una nueva instancia, es decir cuandos e ejecuta esto se tiene como objetivo crear una nueva compania en la base de datos y que esta devuelva un json de ella misma.
    app.post('/api/company', companyController.create);
    // Final de la company ruta
}