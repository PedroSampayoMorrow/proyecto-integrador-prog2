let data = require('../db/data')
let db = require('../database/models')
let usuario = db.Usuario;
let posteo = db.Posteo;
let usuariosController = {
    buscarPorId: function (req, res) {
        let idBuscado = req.params.id;
        usuario.findByPk(idBuscado,{include:[{all:true,nested:true}]})
            .then(function (resUsuario) {
                return res.render('detalleUsuario', { usuario: resUsuario})
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
        usuario.findByPk(5,{include:[{all:true,nested:true}]})
        .then(function (resultadoUsuario) {
            return res.render('miPerfil', { usuario: resultadoUsuario})
        })
        },
    editarMiPerfil: function (req, res) {
        return res.render('editarPerfil')
    }
}

module.exports = usuariosController;