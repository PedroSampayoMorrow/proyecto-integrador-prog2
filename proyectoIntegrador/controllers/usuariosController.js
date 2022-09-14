let data = require('../db/data')

let usuariosController = {
    buscarPorId: function (req, res) {
        let idBuscado = req.params.id;
        let resultadoUsuario = [];
        for (let i = 0; i < data.usuarios.length; i++) {
            if (idBuscado == data.usuarios[i].id) {
                resultadoUsuario.push(data.usuarios[i])
            }
        };

        let posteosUsuario = [];
        for (let i = 0; i < data.posteos.length; i++) {
            if (idBuscado == data.posteos[i].idAutor) {
                posteosUsuario.push(data.posteos[i])
            }

        };
        return res.render('detalleUsuario', { usuario: resultadoUsuario[0], posteosUsuario: posteosUsuario } );
    },
    registrar: function (req, res) {
        return res.render('registracion')
    },
    login: function (req, res) {
        return res.render('login')
    },
    miPerfil: function (req, res) {
        let indiceRandom = Math.round(Math.random()*4)

        let resultadoUsuario = data.usuarios[indiceRandom]
        let resultadoUsuarioId = data.usuarios[indiceRandom].id
        let posteosUsuario = []

        for (let i = 0; i < data.posteos.length; i++) {
            if (resultadoUsuarioId == data.posteos[i].idAutor) {
                posteosUsuario.push(data.posteos[i])
            }
        }
        return res.render('miPerfil', { usuario: resultadoUsuario, posteosUsuario: posteosUsuario })
    },
    editarMiPerfil: function (req, res) {
        return res.render('editarPerfil')
    }
}

module.exports = usuariosController;