var Usuario = require('../models/usuario');


exports.obtenerUsuarios = async function (req, res) {
    var reg = await Usuario.find();
    res.status(200).send({ data: reg });
}