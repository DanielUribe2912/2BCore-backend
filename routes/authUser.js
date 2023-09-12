const express = require('express')
const router = require('express').Router();

const usuarioController = require('../controllers/AuthUserController')

const adminController = require('../controllers/AuthAdminController')



router.post('/', usuarioController.crearUsuario);
router.get('/', adminController.obtenerUsuarios);
router.post('/login', usuarioController.loginUsuario);


module.exports = router