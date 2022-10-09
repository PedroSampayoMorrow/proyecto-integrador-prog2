
let data = require('../db/data')
let db = require('../database/models')
let posteo = db.Posteo;
let comentario = db.Comentario;
let usuario = db.Usuario;
let posteos = data.posteos
let posteoController = {
    buscarPorId:function (req,res) {
        let idBuscado =  req.params.id
            /*let resultadoPosteo = []
        for (let i = 0; i < posteos.length; i++) {
           if (idBuscado == posteos[i].id) {
               resultadoPosteo.push(posteos[i])
           }
        }
        comentariosPosteo = []
        for (let i = 0; i < data.comentarios.length; i++) {
           if (idBuscado == data.comentarios[i].idPosteo) {
               comentariosPosteo.push(data.comentarios[i])
           }
            
        }*/
        let criterios = {where:[{id_posteo : idBuscado}]}
        let buscarPosteo = posteo.findByPk(idBuscado)
        let buscarComentarios = comentario.findAll(criterios)
        Promise.all([buscarPosteo, buscarComentarios])
        .then(function ([resultadoPosteo,resultadoComentarios]) {
            return res.render('detallePost', {posteo : resultadoPosteo, comentarios : resultadoComentarios})
        })
        /*return res.render('detallePost', {posteo : resultadoPosteo[0], comentarios : comentariosPosteo})*/
    } ,
    crear : function (req,res) {
        return res.render('agregarPost')
    }
}

module.exports = posteoController;