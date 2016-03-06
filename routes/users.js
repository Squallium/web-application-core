var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('users/register', {
    title: 'Register'
  });
});

// process the signup form
router.post('/signup', function (req, res) {
  passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, function () {
    console.log('Signup request finished.')
  });
});

router.get('/login', function (req, res, next) {
  res.render('users/login', {
    title: 'Login'
  });
});


module.exports = router;
