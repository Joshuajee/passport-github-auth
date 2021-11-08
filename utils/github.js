const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../model/UserModel');


module.exports = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {

    User.findOne({githubId: profile.id }).then((data, err) => {

      if (!data) return User.create({
        githubId: profile.id,
        fullname: profile.displayName,
        username: profile.username,
        location: profile._json.location,
        phone: profile._json.phone,
        email: profile._json.email,
        profilePhoto: profile._json.avatar_url
      }).then((data, err) => {
        return done(null, data);
      });

      else return done(null, data);
    });
  
  }
);
