
let data = require('../db/data')
let posteos = data.posteos
let posteoController = {
    buscarPorId:function (req,res) {
        let idBuscado =  req.params.id
            let resultadoPosteo = []
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
            
        }
        return res.render('detallePost', {posteo : resultadoPosteo[0], comentarios : comentariosPosteo})
    } ,
    crear : function (req,res) {
        return res.render('agregarPost')
    }
}

module.exports = posteoController;