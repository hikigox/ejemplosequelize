const companyController = require('../controllers').company;

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({

        message: 'Bienvenido a el API!'
    }));

    //  Empeazar Crear ruta de company para una nueva instancia
    app.post('/api/company', companyController.create);
    // Final de la company ruta
}