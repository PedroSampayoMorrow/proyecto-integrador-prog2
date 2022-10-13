

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
    }
}

module.exports = posteoController;