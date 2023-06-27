var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');

router.get('/', function (req, res, next) {
    res.render('meme', {auth: req.isAuthenticated()})
});

module.exports = router;
