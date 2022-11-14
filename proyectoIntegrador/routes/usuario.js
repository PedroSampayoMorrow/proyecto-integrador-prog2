let express = require('express');
let router = express.Router();
let usuariosController = require('../controllers/usuariosController');
let multer = require('multer')
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/Usuarios'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + ' - ' + Date.now() + path.extname(file.originalname))
    }
})



let upload = multer({ storage: storage })

router.get('/detalle/id/:id', usuariosController.buscarPorId)

router.get('/registrar', usuariosController.registrar)
router.post('/registrar', upload.single('foto'), usuariosController.crear)

router.get('/login', usuariosController.login)
router.post('/login', usuariosController.loginV)

router.get('/miperfil', usuariosController.miPerfil)

router.get('/miperfil/editar', usuariosController.editarMiPerfil)
router.post('/miperfil/editar', usuariosController.editarPerfil)

router.post('/seguir', usuariosController.seguir)

router.get('/logout', usuariosController.logout)

router.get('/myfeed', usuariosController.myFeed)

module.exports = router;