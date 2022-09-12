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
        let idBuscado = req.params.id
        let resultadoUsuario = []
        for (let i = 0; i < data.usuarios.length; i++) {
            if (idBuscado == data.usuarios[i].id) {
                resultadoUsuario.push(data.usuarios[i])
            }
        }
        return res.render('miPerfil', { usuario: resultadoUsuario[0] })
    },
    editarMiPerfil: function (req, res) {
        return res.render('editarPerfil')
    }
}

module.exports = usuariosController;