
const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');


//CRUD RESTful

//Leer todas las peliculas
router.get('/', PeliculasController.traePeliculas);
//http://localhost:3000/peliculas

//Registro de una peli nueva
router.post('/', PeliculasController.registraPelicula);
//http://localhost:3000/peliculas

//Búsqueda de películas por título
router.get('/titulo', PeliculasController.peliculasTitulo);


module.exports = router;