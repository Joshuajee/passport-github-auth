const express = require('express');
const passport = require('passport');
const github = require('./../utils/github');
const authController = require('./../controller/auth');

passport.use(github);

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

router.get('/', function(req, res){
    res.render('index', { user: req.user });
});

router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', 
    passport.authenticate('github', { failureRedirect: '/',  failureFlash: true }),
    (req, res) =>  res.redirect('/account'));

router.get('/logout', authController.logout);

module.exports = router;