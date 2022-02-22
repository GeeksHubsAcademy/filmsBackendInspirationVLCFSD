
const { Router } = require('express');
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

//Búsqueda de películas por título y adulto
router.get('/favoritas', PeliculasController.favouriteFilms);

router.get('/adultos', PeliculasController.peliculasAdultas);
//Búsqueda de películas por título
router.get('/titulo', PeliculasController.peliculasTitulo);

//Búsqueda de novedades
router.get('/novedades', PeliculasController.traeNovedades);


module.exports = router;