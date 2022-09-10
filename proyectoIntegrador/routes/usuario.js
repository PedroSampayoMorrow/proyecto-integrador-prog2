let express = require('express');
let router = express.Router();
let usuariosController = require ('../controllers/usuariosController');


router.get('/detalle/id/:id', usuariosController.buscarPorId)
router.get('/registrar', usuariosController.registrar )
router.get('/login', usuariosController.login)
router.get('/miperfil', usuariosController.miPerfil)
router.get('/miperfil/editar', usuariosController.editarMiPerfil)
module.exports = router;