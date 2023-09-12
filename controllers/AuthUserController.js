var Usuario = require('../models/usuario');
const bcrypt = require("bcryptjs");

var jwt = require('../helpers/jwt');
var saltRounds = 10;



exports.crearUsuario = async function (req, res) {


  var data = req.body;
  var user_arr = [];
  user_arr = await Usuario.find({ correo: data.correo });

  if (user_arr.length == 0) {

    if (data.password) {
      bcrypt.hash(data.password, saltRounds, async function (err, hash) {
        if (hash) {

          data.password = hash;
          var reg = await Usuario.create(data);

          res.status(200).send({ data: reg });

        }
      })
    } else {
      res.status(200).send({ message: 'No hay una contraseña', data: undefined });

    }



  } else {
    res.status(200).send({ message: 'El correo ya existe en la BD', data: undefined });

  }




}


exports.loginUsuario = async function (req, res) {
  var data = req.body;
  var user_arr = [];
  user_arr = await Usuario.find({ correo: data.correo })

  if (user_arr.length == 0) {
    res.status(200).send({ message: 'El correo no existe', data: undefined });
  } else {
    //login
    let user = user_arr[0];

    bcrypt.compare(data.password, user.password, async function (error, check) {
      if (check) {
        res.status(200).send({ data: user, token: jwt.createToken(user) });
      } else {
        res.status(200).send({ message: 'La contraseña es incorrecta', data: undefined });
      }
    });

  }
}
