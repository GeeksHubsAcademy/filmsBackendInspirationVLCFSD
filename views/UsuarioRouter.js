
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UsuarioController = require('../controllers/UsuarioController');

//CRUD RESTful

//Leer todos los usuarios
router.get('/', auth,  UsuarioController.traeUsuarios);
//http://localhost:3000/usuarios


router.get('/email/:email', auth, UsuarioController.traerUsuarioEmail);
router.get('/:id', auth, UsuarioController.traerUsuarioId);

//Registro
router.post('/', UsuarioController.registraUsuario);
//http://localhost:3000/usuarios

//Modificar datos de un Usuario
router.put('/newpassword', auth, UsuarioController.updatePassword);
router.put('/:id', auth, UsuarioController.updateProfile);


//Borramos a todos los usuarios
router.delete('/', isAdmin, UsuarioController.deleteAll);

//Borramos a todos los usuarios
router.delete('/:id', auth, UsuarioController.deleteById);

//Login
router.post('/login', UsuarioController.logUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;