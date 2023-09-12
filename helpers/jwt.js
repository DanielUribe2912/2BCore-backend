'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'danieluribe';

exports.createToken = function (usuario) {
    var payload = {
        sub: usuario._id,
        correo: usuario.correo,
        rol: usuario.rol,
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix()
    }
    console.log(payload)
    return jwt.encode(payload, secret);
}