var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

router.get('/', indexController.index);
router.get('/search', indexController.search);
router.get('/search/user', indexController.searchUser);
router.get('/search/usuarios', indexController.searchUsuarios)

module.exports = router;
