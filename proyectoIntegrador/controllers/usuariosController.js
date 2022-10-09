let data = require('../db/data')
let db = require('../database/models')
let usuario = db.Usuario;
let posteo = db.Posteo;
let usuariosController = {
    buscarPorId: function (req, res) {
        let idBuscado = req.params.id;
        let criterios = { where: [{ id_usuario: idBuscado }] }
        let buscarUsuario = usuario.findByPk(idBuscado)
        let buscarPosteos = posteo.findAll(criterios);
        Promise.all([buscarUsuario, buscarPosteos])
            .then(function ([resUsuario, resPosteos]) {
                return res.render('detalleUsuario', { usuario: resUsuario, posteosUsuario: resPosteos })
            }).catch(function (error) {
                return res.send(error)
            })
    },
    registrar: function (req, res) {
        return res.render('registracion')
    },
    login: function (req, res) {
        return res.render('login')
    },
    miPerfil: function (req, res) {
        let indiceRandom = Math.round(Math.random() * 4)

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