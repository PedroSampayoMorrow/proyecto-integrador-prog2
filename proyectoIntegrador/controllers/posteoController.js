
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
        return res.render('detallePost', {posteo : resultadoPosteo[0]})
    } ,
    crear : function (req,res) {
        return res.render('agregarPost')
    }
}

module.exports = posteoController;