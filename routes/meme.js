var express = require('express');
var router = express.Router();
const axios = require('axios');
var session = require('express-session');

router.get('/meme', function (req, res, next) {
    let auth = req.isAuthenticated();
    if (req.session.visited == null) {
        req.session.visited = "";
    } 
    if (!req.session.visited.includes(req.query.id)) {
        req.session.visited += req.query.id + ';'
    }
    let memes = JSON.parse(session.Store.memes).data.memes;
    let memeId = req.query.id;
    const meme = memes.find((meme) => meme.id === memeId)

    if (auth) {
        res.render('meme', {
            auth, 
            meme,    
            user: req.user?.username ?? 'Guest'
        })
    } else {
        res.redirect('/')
    }
});


//Wasn't able to navigate using a POST request
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