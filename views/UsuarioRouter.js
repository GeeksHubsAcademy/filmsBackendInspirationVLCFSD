
const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/', UsuarioController.traeUsuarios);
//http://localhost:3000/usuarios


router.get('/email/:email', UsuarioController.traerUsuarioEmail);
router.get('/:id', UsuarioController.traerUsuarioId);

//Registro
router.post('/', UsuarioController.registraUsuario);
//http://localhost:3000/usuarios

//Modificar datos de un Usuario
router.put('/:id', UsuarioController.updateProfile);

//Borramos a todos los usuarios
router.delete('/', UsuarioController.deleteAll);

//Borramos a todos los usuarios
router.delete('/:id', UsuarioController.deleteById);

//Login
router.post('/login', UsuarioController.logUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;