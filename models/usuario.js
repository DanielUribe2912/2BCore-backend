const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const UserSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    rol: {
        type: String,
        default: 'usuario',
        required: false,
    }

});

const User = mongoose.model('usuarios', UserSchema)
module.exports = User