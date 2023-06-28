var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var fs = require('fs');

//Mostly based on https://github.com/passport/todos-express-password

const users = JSON.parse(fs.readFileSync('./users.json'))

passport.use(new LocalStrategy(function verify(username, password, cb) {
    const user = users.find((user) => user.username === username)

    if (user == null) {
        return cb(null, false);
    } else if (user.username === username && user.password === password) {
        return cb(null, user);
    } else {
        return cb(null, false);
    }
}));


passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});


router.post('/login/password', passport.authenticate('local', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login',
  failureMessage: true
}));


router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
