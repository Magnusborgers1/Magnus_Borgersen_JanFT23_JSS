var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    auth: req.isAuthenticated(),
    user: req.user?.username
  });
});

module.exports = router;
