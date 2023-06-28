var express = require('express');
var router = express.Router();
const session = require('express-session');

//BM New API endpoint to use for the data from the soccer API
router.get('/memes', function (req, res, next) {
    let memes = JSON.parse(session.Store.memes).data.memes;
    
    res.render('memes', {
        auth: req.isAuthenticated(),
        memes,
        user: req.user?.username ?? 'Guest',
        visitedMemes: req.session?.visited ?? ""
    });
});

module.exports = router;
