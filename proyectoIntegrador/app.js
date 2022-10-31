var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session')

let db = require('./database/models')

var app = express();

var indexRouter = require('./routes/index');
let usuarioRouter = require('./routes/usuario')
let posteoRouter = require('./routes/posteo')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "MyAppProg2",
  resave: false,
  saveUninitialized: true
}));

app.use(function (req,res,next) {
  if (req.session.user != undefined){
    res.locals.user = req.session.user
  }
  return next()
});

app.use(function(req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
      let id = req.cookies.userId;

      db.Usuario.findByPk(id)
      .then((usuario) => {
        req.session.user = usuario.dataValues;
        res.locals.user  = usuario.dataValues;
        return next();
        
      }).catch((err) => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }
});



app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/posteo', posteoRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
