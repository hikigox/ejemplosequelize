//Controlador de company
const Company = require('../models').Company;

// Creamos el metodo create y lo exportamos para llamarlo en las rutas
module.exports = {
    create(req, res) {
        // Llama a Company y dentro de esta existe internamente un metodo llamado create, el cual es una promesa .
        return Company
            .create({
                name: req.body.name
            }).then(company => res.status(201).send(company))
            .catch(error => res.status(400).send(error));

    }


};