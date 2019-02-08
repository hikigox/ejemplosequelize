const Employee = require('../models').Employee;

module.exports = {

    findById(req, res) {
        return Employee.
            //Cuando hacemos el then lo que colocamos como valor de retorno, es el json que muestra en pantalla.
        findById(req.params.id).then(employee => {
                console.log(employee);

                if (employee == null) {
                    res.status(200).send({
                        error: 'No se encuentra ningun Employee con ese id',
                        ok: false
                    });

                } else {

                    res.status(200).send(employee);
                }

            })
            .catch(err => res.status(400).send(err));


    },
    // Sacar a todos los Employee
    findAll(req, res) {
        return Employee.
        findAll().then(employees => res.status(200).send(employees))
            .catch(err => res.status(204).send(err));



    },

    //Crear Employee
    create(req, res) {
        console.log('Entro');

        return Employee
            .create({
                name: req.body.name,
                designation: req.body.designation,
                salary: req.body.salary,
                companyId: req.body.companyId

            }).then(employee => res.status(201).send(employee))
            .catch(err => {

                if (err.name === 'SequelizeForeignKeyConstraintError') {
                    err = {

                        error: 'La llave foranea ingresada no es valida',
                        ok: false
                    };


                }

                res.status(400).send(err);
                console.log(err);



            });




    }


}