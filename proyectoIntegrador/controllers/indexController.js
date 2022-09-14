let data = require('../db/data')

let indexController = {
    index : function(req, res) {

        res.render('index', {datos : data.posteos, comentarios : data.comentarios});
      } , 
    search : function (req,res) {

        buscado = req.query.buscado;
        let resultadoPosteo = []
        let comentariosPosteo = []
            for (let i = 0; i < data.posteos.length; i++) {
               if (buscado.toLowerCase() == data.posteos[i].nombre) {
                   resultadoPosteo.push(data.posteos[i])
                   let idDelPosteoEncontrado = data.posteos[i].id
                   for (let i2 = 0; i2 < data.comentarios.length; i2++) {
                       if (data.comentarios[i2].idPosteo == idDelPosteoEncontrado) {
                          comentariosPosteo.push(data.comentarios[i2])
                       }
                       
                   }
               }
            }

            
        return res.render('resultadoBusqueda', {datos:resultadoPosteo, buscado:buscado, comentarios : comentariosPosteo})
    }
}

module.exports = indexController;