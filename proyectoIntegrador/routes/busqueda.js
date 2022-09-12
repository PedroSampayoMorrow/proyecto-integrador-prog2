let express = require('express');
let router = express.Router();
let data = require('../db/data')
let busquedaController = require('../controllers/busquedaController')

router.get('/',busquedaController.buscar)

module.exports = router;