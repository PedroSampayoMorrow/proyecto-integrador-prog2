
let db = require('../database/models')
let posteo = db.Posteo;

let bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const { where } = require('sequelize');

let usuariosController = {
    buscarPorId: function (req, res) {
        let idBuscado = req.params.id;

        let followers = db.Seguidor.findAll({ where: [{ id_seguido: idBuscado }] })

        let resUsuario = db.Usuario.findByPk(idBuscado, { include: [{ all: true, nested: true }] })
        Promise.all([followers, resUsuario])
            .then(function ([followersres, resUsuariores]) {
                let posteosCronolicos = resUsuariores.posteo.reverse()
                return res.render('detalleUsuario', { usuario: resUsuariores, followers: followersres, posteosCronologicos: posteosCronolicos })
            }).catch(function (error) {
                return res.send(error)
            })


    },
    registrar: function (req, res) {
        if (req.session.user != null) {
            return res.redirect('/')
        } else {
            return res.render('registracion')
        }
        
    },
    login: function (req, res) {
        if (req.session.user != null) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },
    miPerfil: function (req, res) {

        if (req.session.user != null) {
            let followers = db.Seguidor.findAll({ where: [{ id_seguido: req.session.user.id }] })
            let resUsuario = db.Usuario.findByPk(req.session.user.id, { include: [{ all: true, nested: true }] })
            Promise.all([followers, resUsuario])
                .then(function ([resfollowers, resultadoUsuario]) {
                    let posteosCronolicos = resultadoUsuario.posteo.reverse()
                    return res.render('miPerfil', { usuario: resultadoUsuario, followers: resfollowers, posteosCronologicos: posteosCronolicos })

                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            return res.redirect('/usuario/login')
        }

    },
    editarMiPerfil: function (req, res) {
        if (req.session.user != null) {
            db.Usuario.findByPk(req.session.user.id, { include: [{ all: true, nested: true }] })
            .then(function (resultados) {
                return res.render('editarPerfil', { usuario: resultados.dataValues })
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            return res.redirect('/usuario/login')
        }
        
    },
    editarPerfil: function (req, res) {
        //    return res.send(req.body)
        db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            usuario: req.body.username,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
            fecha_nacimiento: req.body.fecha_nacimiento,
            numero_documento: req.body.numero_documento,
            foto: req.body.foto,
        }, { where: { id: req.body.id } })
            .then(function (result) {
                return res.redirect('/usuario/detalle/id/' + req.body.id)
            }).catch(function (error) {
                console.log(error);
            })

    },
    crear: function (req, res) {
        //return res.send(req.body)
        let errores = {}

        if (req.body.contrasenia.length < 3) {
            errores.message5 = "La contraseña no puede tener menos de 3 caracteres"
            res.locals.errores = errores
            return res.render('registracion')
        } else if (req.body.email == "") {
            errores.message = "El campo e-mail no puede estar vacio"
            res.locals.errores = errores
            return res.render('registracion')
        } else {
            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                usuario: req.body.username,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                fecha_nacimiento: req.body.fecha_nacimiento,
                numero_documento: req.body.numero_documento,
                foto: req.file.filename,
            }).then(function (result) {
                return res.redirect('/usuario/login')
            }).catch(function (error) {

                if (error.message == "Validation error") {
                    errores.message = "El e-mail que pusiste ya esta registrado! Logueate o intenta con otro e-mail!"
                    res.locals.errores = errores
                    return res.render('registracion')

                } else {
                    console.log(error);
                }
                console.log(error);
            })
        }


    },
    loginV: function (req, res) {
        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (resultados) {
                if (resultados != null) {
                    let booleano = bcrypt.compareSync(req.body.contrasenia, resultados.contrasenia);
                    if (booleano) {
                        req.session.user = resultados.dataValues
                        if (req.body.recordarme != null) {
                            res.cookie('userId', resultados.dataValues.id, { maxAge: 1000 * 60 * 10 })
                        }
                        return res.redirect('/')
                    } else {
                        return res.send('Contraseña incorrecta! Intenta denuevo por favor')
                    }
                } else {
                    return res.send('el e-mail que pusiste no existe!')
                }
            }).catch(function (error) {
                return res.send(error)
            })
    },
    seguir: function (req, res) {
        let followersmsg = {}
        if (req.session.user != null) {
            db.Seguidor.findOne({ where: [{ id_seguidor: req.session.user.id }, { id_seguido: req.body.idPerfil }] })
            .then(function (relacionEncontrada) {
                if (relacionEncontrada == undefined) {
                    db.Seguidor.create({
                        id_seguidor: req.session.user.id,
                        id_seguido: req.body.idPerfil
                    }).then(function (info) {
                        return res.redirect('/usuario/detalle/id/'+ req.body.idPerfil)
                    }).catch ( function (error) {
                        console.log(error);
                    })
                } else {
                    return res.redirect('/usuario/detalle/id/'+ req.body.idPerfil)
                }
            })
        } else {
            return res.redirect('/usuario/login')
        }
        

    },
    logout: function (req, res) {
        res.clearCookie('userId')
        req.session.destroy();
        // res.locals.user = null;
        return res.redirect('/');
    },
    myFeed: function (req,res) {
        db.Seguidor.findAll({ where: [{ id_seguidor: req.session.user.id }],include:[{all:true,nested:true}] })
        .then(function (resultado) {
            let arrayIdSeguidos = []
            for (let i = 0; i < resultado.length; i++) {
                arrayIdSeguidos.push(resultado[i].id_seguido)
            }
            let criterios = {
                include:[{all:true,nested:true}],
                limit:20,
                order : [['created_at','DESC']],
                where: [{ id_usuario: arrayIdSeguidos}]     
            }
            posteo.findAll(criterios)
            .then(function (resultado) {
                return  res.render('index', {datos : resultado});
            })
        }).catch(function (error) {
            console.log(error);
        })
    }
}

module.exports = usuariosController;