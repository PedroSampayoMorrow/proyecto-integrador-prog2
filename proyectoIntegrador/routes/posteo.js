let express = require('express');
let router = express.Router();
let usuarios = require('../db/data')

let posteoController = require('../controllers/posteoController')

router.get('/detalle/id/:id',posteoController.buscarPorId )

router.get('/crear',posteoController.crear)

module.exports = router;