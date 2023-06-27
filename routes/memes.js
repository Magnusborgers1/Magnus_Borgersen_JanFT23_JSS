var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
const fs = require('fs');

//BM New API endpoint to use for the data from the soccer API
router.get('/memes', function (req, res, next) {
    let memesFile = fs.readFileSync('public/memes.json');
    let memes = JSON.parse(memesFile).data.memes;
    
    res.render('memes', {
        auth: req.isAuthenticated(),
        memes
    });
    

});

module.exports = router;
