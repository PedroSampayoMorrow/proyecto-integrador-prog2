let express = require('express');
let router = express.Router();
let usuariosController = require ('../controllers/usuariosController');


router.get('/detalle/id/:id', usuariosController.buscarPorId)

router.get('/registrar', usuariosController.registrar )
router.post('/registrar',usuariosController.crear)

router.get('/login', usuariosController.login)
router.post('/login', usuariosController.loginV)

router.get('/miperfil', usuariosController.miPerfil)

router.get('/miperfil/editar', usuariosController.editarMiPerfil)

router.post('/miperfil/editar', usuariosController.editarPerfil)

router.post('/seguir', usuariosController.seguir)
module.exports = router;