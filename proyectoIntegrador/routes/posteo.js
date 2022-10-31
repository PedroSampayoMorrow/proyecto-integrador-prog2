let express = require('express');
let router = express.Router();
let posteoController = require('../controllers/posteoController')

router.get('/detalle/id/:id',posteoController.buscarPorId )
router.post('/detalle/comentarios', posteoController.comentarios)
router.get('/crear',posteoController.crear)
router.post('/crear',posteoController.agregar)

router.post('/detalle/update/id/:id', posteoController.update)
router.post('/update', posteoController.modificar)
module.exports = router;