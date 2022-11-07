let express = require('express');
let router = express.Router();
let posteoController = require('../controllers/posteoController')

let multer = require('multer')
let path = require('path');


router.get('/detalle/id/:id',posteoController.buscarPorId )
router.post('/detalle/comentarios', posteoController.comentarios)

let storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,path.join(__dirname, '../public/images/Posteos'))
    },
    filename: function (req,file,cb) {
        cb(null,file.fieldname + ' - ' + Date.now()+ path.extname(file.originalname))
    }
})

let upload = multer({storage:storage})


router.get('/crear',posteoController.crear)
router.post('/crear', upload.single('foto') ,posteoController.agregar)

router.post('/detalle/update/id/:id', posteoController.update)
router.post('/update', posteoController.modificar)
module.exports = router;