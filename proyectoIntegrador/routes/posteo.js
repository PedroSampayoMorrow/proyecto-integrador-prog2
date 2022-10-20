let express = require('express');
let router = express.Router();
let posteoController = require('../controllers/posteoController')

router.get('/detalle/id/:id',posteoController.buscarPorId )

router.get('/crear',posteoController.crear)
router.post('/crear',posteoController.agregar)

module.exports = router;