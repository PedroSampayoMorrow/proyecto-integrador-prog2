let data = require('../db/data')

let busquedaController = {
    buscar : function (req,res) {

        buscado = req.query.buscado;
        let resultadoPosteo = []
            for (let i = 0; i < data.posteos.length; i++) {
               if (buscado == data.posteos[i].nombre) {
                   resultadoPosteo.push(data.posteos[i])
               }
            }
        return res.render('resultadoBusqueda', {datos:resultadoPosteo, buscado:buscado})
    }
}

module.exports = busquedaController