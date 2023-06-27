var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var JsonStore = require('express-session-json')(session);
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var memesRouter = require('./routes/memes');
var fs = require('fs');
var https = require('https');

// var highlightsRouter = require('./routes/highlights');

// var app = express();
var app = module.exports = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser("keyboard cat"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
  secret: 'keyboard cat',
  resave: true, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  // store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
  store: new JsonStore(),
  cookie: { maxAge: oneDay },

}));

https.get('https://api.imgflip.com/get_memes', (res) => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });  
  res.on('end', () => {
    // app.memes = data;
    // process.stdout.write(d);
    fs.writeFileSync("public/memes.json", data);
  }); 
});

app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', memesRouter);
// app.use('/highlights', highlightsRouter);

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

