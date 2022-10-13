
let data = require('../db/data')
let db = require('../database/models');
const { posteos } = require('../db/data');
let posteo = db.Posteo;
let comentario = db.Comentario;
let usuario = db.Usuario;
let op = db.Sequelize.Op;
let indexController = {
    index : function(req, res) {
        let criterios = {
            include:[{all:true,nested:true}],
            limit:10
        }
        posteo.findAll(criterios)
        .then(function (resultado) {
            return  res.render('index', {datos : resultado});
        })
  
      } , 
    search : function (req,res) {
        buscado = req.query.buscado;
            let criterios = {
                include:[{all:true,nested:true}],
                where: [{nombre : {[op.like] : "%"+buscado+"%" }}]
                // NO SE XQ NO BUSCA COSAS PARECIDAS
            }
            posteo.findAll(criterios)
            .then(function (resultado) {
                return res.render('resultadoBusqueda', {datos:resultado, buscado:buscado})
            })
            
        
    }
}

module.exports = indexController;