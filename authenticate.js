var FacebookTokenStrategy = require('passport-facebook-token');
var passport = require('passport');
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
exports.facebookPassport = passport.use(new FacebookTokenStrategy({
    clientID: '469242777408961',
    clientSecret: '7e7e28f448a88d27d42c8f4f605bb6b1',
    callbackURL: 'auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    if (profile.id) {
        console.log("The user id is" + profile.id);
        return done(profile, profile);
    } else
        return null;

}));