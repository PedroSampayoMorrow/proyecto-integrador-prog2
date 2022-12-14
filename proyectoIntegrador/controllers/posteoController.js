

const session = require('express-session');
let db = require('../database/models')

let posteo = db.Posteo;
let comentario = db.Comentario;
let usuario = db.Usuario;
let posteoController = {
    buscarPorId: function (req, res) {
        let idBuscado = req.params.id
        posteo.findByPk(idBuscado, {
            order: [["created_at", "ASC"]], include: [{ all: true, nested: true }]
        })
            .then(function (resultadoPosteo) {
                let comentariosOrdenados = resultadoPosteo.comentarios.reverse()
                return res.render('detallePost', { posteo: resultadoPosteo, comentarios: comentariosOrdenados })
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    crear: function (req, res) {
        if (req.session.user != undefined) {
            return res.render('agregarPost')
        }
        else {
            res.redirect('/usuario/login')
        }
    },
    agregar: function (req, res) {

        // return res.send(req.body)

        if (req.session.user != undefined) {
            console.log(req.file);
            db.Posteo.create({
                nombre: req.body.titulo,
                descripcion: req.body.descripcion,
                imagen_url: req.file.filename
                ,
                id_usuario: req.session.user.id
            })



            return res.redirect('/')
        } else {
            return res.send('Logueate antes de hacer un posteo!')
        }


    },
    comentarios: function (req, res) {
        let idPost = req.params.id
        if (req.session.user != undefined) {
            db.Comentario.create({
                id_usuario: req.session.user.id,
                id_posteo: req.body.id_posteo,
                texto: req.body.texto
            })
            return res.redirect('/posteo/detalle/id/' + req.body.id_posteo)
        } else {
            return res.redirect('/usuario/login')
        }


    },
    update: function (req, res) {
        posteo.findByPk(req.query.id_posteo)
            .then(function (resultado) {
                if (req.session.user != undefined && req.session.user.id == resultado.id_usuario){ 
                    return res.render('editarPosteo', { posteo: resultado }) 
                } else { 
                    return res.redirect('/')
                }
            }).catch(function (error) {
                console.log(error);
            })

    },
    modificar: function (req, res) {
            posteo.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen_url: req.body.imagen_url,
                id_usuario: req.body.id_usuario
            }, { where: { id: req.body.id } })
            return res.redirect('/posteo/detalle/id/' + req.body.id)
    },
    likes: function (req, res) {
        let likesmsg = {}
        if (req.session.user != null) {
            db.Likes.findOne({ where: [{ id_usuario: req.session.user.id }, { id_posteo: req.body.idPosteo}] })
                .then(function (relacionEncontrada) {
                    if (relacionEncontrada == undefined) {
                        db.Likes.create({
                            id_usuario: req.session.user.id,
                            id_posteo: req.body.idPosteo
                        }).then(function (info) {
                            return res.redirect('/posteo/detalle/id/' + req.body.idPosteo)
                        }).catch(function (error) {
                            console.log(error);
                        })
                    } else {
                        return res.redirect('/posteo/detalle/id/' + req.body.idPosteo)
                    }
                })
        } else {
            return res.redirect('/usuario/login')
        }


    }
}

module.exports = posteoController;