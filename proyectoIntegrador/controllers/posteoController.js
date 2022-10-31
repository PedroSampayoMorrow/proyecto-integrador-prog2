

const session = require('express-session');
let db = require('../database/models')
let posteo = db.Posteo;
let comentario = db.Comentario;
let usuario = db.Usuario;
let posteoController = {
    buscarPorId: function (req, res) {
        let idBuscado = req.params.id
        posteo.findByPk(idBuscado,{include:[{all:true,nested:true}]})
            .then(function (resultadoPosteo) {
                return res.render('detallePost', {posteo: resultadoPosteo })
            })
    },
    crear: function (req, res) {
        return res.render('agregarPost')
    },
    agregar : function (req, res) {
       // return res.send(req.body)
       if (req.session.user != undefined) {
        db.Posteo.create({
            nombre : req.body.titulo,
            descripcion: req.body.descripcion,
            imagen_url: req.body.imagen_url,
            id_usuario: req.session.user.id
        })
        return res.redirect('/')
       } else {
           return res.send('Logueate antes de hacer un posteo!')
       }
      
      
    },
    comentarios :function (req, res) {
        let idPost = req.params.id
        if (req.session.user != undefined) {
            db.Comentario.create({
                id_usuario: req.session.user.id,
                 id_posteo : req.body.id_posteo,
                 texto : req.body.texto
             })
             return res.redirect('/posteo/detalle/id/' + req.body.id_posteo)
        } else{
            return res.send('Logueate antes de comentar!')
        }
       
        
},
update: function (req, res) {
    posteo.findByPk(req.params.id)
    .then(function (resultado) {
        return res.render('editarPosteo',{posteo:resultado})
    }).catch(function (error) {
        return res.send(error)
    })
    
},
modificar:function (req,res) {
    posteo.update({
        nombre : req.body.nombre,
        descripcion: req.body.descripcion,
        imagen_url: req.body.imagen_url,
        id_usuario: req.body.id_usuario
    },{where:{id:req.body.id}})
    return res.redirect('/posteo/detalle/id/' +req.body.id)
}
}

module.exports = posteoController;