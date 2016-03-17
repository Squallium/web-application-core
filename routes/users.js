var express = require('express');
var router = express.Router();
var passport = require('passport');
var d3api = require('../modules/diablo3/d3-api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
    res.render('users/register', {
        title: 'Register'
    });
    next();
}, function(req, res, next){
    d3api.careerProfile("eu", "squallium-2579", "en_GB");
});

router.post('/signup',
    function(req, res, next) {
        passport.authenticate('local-signup', {
                successRedirect: '/profile',
                failureRedirect: '/login',
                failureFlash: true
            },

            function () {
                console.log("alsjkfañdjf");
                next();
            })(req, res, next)
    }, function(req, res, next) {
            console.log("omg omg");
    });

//app.get('/login', function(req, res, next) {
//    passport.authenticate('local', function(err, user, info) {
//        if (err) { return next(err); }
//        if (!user) { return res.redirect('/login'); }
//        req.logIn(user, function(err) {
//            if (err) { return next(err); }
//            return res.redirect('/users/' + user.username);
//        });
//    })(req, res, next);
//}
//
//
//);

//router.post('/signup',
//    passport.authenticate('local-signup', {
//      successRedirect: '/profile',
//      failureRedirect: '/login',
//      failureFlash: true })
//);

router.get('/login', function (req, res, next) {
  res.render('users/login', {
    title: 'Login'
  });
});


module.exports = router;
