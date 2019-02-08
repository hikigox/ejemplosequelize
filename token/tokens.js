const jwt = require('json-web-token');
const secret = 'your-256-bit-secret';


const getToken = (token) => {

    jwt.decode(secret, token, (err_, decodedPayload, decodedHeader) => {
        if (err_) {
            console.error(err.name, err.message);

        } else {
            // El Payload es el token en si , el Header es el typo y el algoritmo de encriptacion
            console.log(decodedPayload, decodedHeader);


        }


    });

}

const crearToken = (payload) => {

    jwt.encode(secret, payload, (err, token) => {
        if (err) {
            console.error(err.name, err.message);

        } else {

            console.log(token);

        }


    });




}

module.exports = {
    crearToken,
    getToken

}