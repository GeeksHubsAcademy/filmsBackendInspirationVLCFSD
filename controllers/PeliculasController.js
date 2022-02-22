const { default: axios } = require("axios");
const { Pelicula } = require('../models/index');
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const PeliculasController = {};


//Funciones del controlador

PeliculasController.traePeliculas = (req, res) => {

};

PeliculasController.registraPelicula = (req, res) => {

};

PeliculasController.peliculasTitulo = async (req, res) => {

    let busqueda = req.query.criterio;

    try {

        let resultados = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${busqueda}&page=1&include_adult=false`);

        res.send(resultados.data);
        

    } catch (error) {
        console.log(error);
    }

}

PeliculasController.traeNovedades = async (req, res) => {

    try {

        let resultados = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=es-ES&page=1");

        res.send(resultados.data);

    } catch (error) {
        console.log(error);
    }
}

PeliculasController.favouriteFilms = (req,res) => {


    let titulo = req.query.titulo;
    let adult = req.query.adult;
    let popularity = req.query.popularity;

    Pelicula.findAll({
        where : {

            [Op.and] : [
                {
                    titulo : {
                        [Op.like] : titulo
                    }
                },
                {
                    adult : {
                        [Op.like] : adult
                    }
                },
                {
                    popularity : {
                        [Op.like] : popularity
                    }
                }
            ]

        }
    }).then(films => {

        if(films != 0){
            res.send(films);
        }else {
            res.send(`Película no encontrada`);
        };

    }).catch(error => {
        res.send(error);
    })
}

PeliculasController.peliculasAdultas = (req,res) => {

    //todas las películas que no sean para niños

    Pelicula.findAll({
        where : {
            [Op.not] : [
                {
                    adult : {
                        [Op.like] : 0
                    }
                }
            ]
        }
    }).then(peliculasAdultas => {
        if(peliculasAdultas != 0){
            res.send(peliculasAdultas);
        }else {
            res.send("No hay películas que no sean para niños");
        }
    }).catch(error =>{
        res.send(error)
    })

}

module.exports = PeliculasController;