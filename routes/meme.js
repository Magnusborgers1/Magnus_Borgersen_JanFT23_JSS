var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
var fs = require('fs');

router.get('/meme', function (req, res, next) {
    let auth = req.isAuthenticated();
    let memesFile = fs.readFileSync('public/memes.json');
    let memes = JSON.parse(memesFile).data.memes;
    let memeId = req.query.id;
    const meme = memes.find((meme) => meme.id === memeId)

    if (auth) {
        res.render('meme', {auth, meme})
    } else {
        res.redirect('/')
    }
});

// router.post('/meme', function (req, res, next) {
//     let memes = JSON.parse(fs.readFileSync('./memes.json')).data.memes;
//     // let selectedMeme = memes.SELECT(x => x.id = req.memeId);
//     // selectedMeme.nyEgenskap = 12;
// let memeId = req.body.memeId
// // let memeId = JSON.parse(req.body).memeId
//     res.redirect(`/meme/${memeId}`)
//     // res.redirect(307,'/meme')
// })

module.exports = router;
//181913649