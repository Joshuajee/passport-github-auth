const express = require('express');
const passport = require('passport');
const accountController = require('./../controller/account');

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

router.get('/', accountController.user);

module.exports = router;