
const { Usuario } = require('../models/index');

const UsuarioController = {};


//Funciones del controlador

UsuarioController.traeUsuarios = (req, res) => {
    //Búsqueda trayendo a todos los usuarios
    Usuario.findAll()
    .then(data => {

        res.send(data)
    });

};

UsuarioController.traerUsuarioId = (req, res) => {
    //Búsqueda buscando una Id
    Usuario.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

UsuarioController.traerUsuarioEmail = (req, res) => {
    //Búsqueda comparando un campo
    Usuario.findOne({ where : { email : req.params.email }})
    .then(data => {
        res.send(data)
    });
}

UsuarioController.registraUsuario = async (req, res) => {

    //Registrando un usuario
    
    try {

        let name = req.body.name;
        let age = req.body.age;
        let surname = req.body.surname;
        let nickname = req.body.nickname;
        let email = req.body.email;

        //Comprobación de errores.....

        //Guardamos en sequelize el usuario

        Usuario.create({
            name: name,
            age: age,
            surname: surname,
            email: email,
            nickname: nickname
        }).then(usuario => {
            console.log("este es mi amigo", usuario);
            res.send(`${usuario.name}, bienvenida a este infierno`);
        });

    } catch (error) {
        res.send(error);
    }
    
};

UsuarioController.updateProfile = async (req, res) => {

    let datos = req.body;

    let id = req.params.id;

    try {

        Usuario.update(req.body, {
            where: {id : id}
        })
        .then(actualizado => {
            res.send(actualizado);
        });

    } catch (error) {

    }

};

UsuarioController.deleteAll = async (req, res) => {

    try {

        Usuario.destroy({
            where : {},
            truncate : false
        })
        .then(usuariosEliminados => {
            res.send(`Se han eliminado ${usuariosEliminados} usuarios`);
        })

    } catch (error) {
        res.send(error);
    }

};

UsuarioController.deleteById = async (req, res) => {

    let id = req.params.id;

    try {

        Usuario.destroy({
            where : { id : id },
            truncate : false
        })
        .then(usuarioEliminado => {
            console.log(usuarioEliminado);
            res.send(`El usuario con la id ${id} ha sido eliminado`);
        })

    } catch (error) {
        res.send(error);
    }

};


UsuarioController.logUsuario = (req, res) => {

};

module.exports = UsuarioController;