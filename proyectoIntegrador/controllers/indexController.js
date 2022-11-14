

let db = require('../database/models');
const { posteos } = require('../db/data');
const { where, EmptyResultError } = require('sequelize');
let posteo = db.Posteo;
let comentario = db.Comentario;
let usuario = db.Usuario;
let op = db.Sequelize.Op;
let indexController = {
    index: function (req, res) {

        let criterios = {
            include: [{ all: true, nested: true }],
            limit: 20,
            order: [['created_at', 'DESC']]
        }
        posteo.findAll(criterios)
            .then(function (resultado) {
                return res.render('index', { datos: resultado });
            })


    },
    searchUsuarios: function (req, res) {
        return res.render('formSearchUsuarios')
    },
    searchUser:function (req, res) {
        buscado = req.query.buscadoUsuario;
        let criterios = {
            include: [{ all: true, nested: true }],
            where: [{ nombre: { [op.like]: "%" + buscado + "%" } }],
            limit: 10,
            order: [['created_at', 'DESC']]
        }
        usuario.findAll(criterios)
            .then(function (resultado) {
                return res.render('resBusquedaUsuarios', { datos: resultado, buscado: buscado })
            })
    },
    search: function (req, res) {
        buscado = req.query.buscado;
        console.log(req.query.order);
        let criterios = {
            include: [{ all: true, nested: true }],
            where: [{ nombre: { [op.like]: "%" + buscado + "%" } }],
            limit: 10,
            order: [['created_at', 'DESC']]
        }
        let criterios2 = {
            include: [{ all: true, nested: true }],
            where: [{ nombre: { [op.like]: "%" + buscado + "%" } }],
            limit: 10,
            order: [['created_at', 'ASC']]
        }
        if (req.query.order != null) {
            posteo.findAll(criterios2)
            .then(function (resultado) {
                return res.render('resultadoBusqueda', { datos: resultado, buscado: buscado })
            })
            .catch(function (error) {
                return res.send(error)
            })
            
        } else {
            posteo.findAll(criterios)
            .then(function (resultado) {
                return res.render('resultadoBusqueda', { datos: resultado, buscado: buscado })
            
            })
            .catch(function (error) {
                return res.send(error)
            })
        }


    }
}

module.exports = indexController;