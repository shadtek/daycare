const express = require('express');
const session = require('express-session')
const passport = require('passport');
const passportConfig = require('./config')
const FacebookStrategy = require('passport-facebook').Strategy;


const port = process.env.PORT || 3000;
const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'some-random-string' }));

passport.use(new FacebookStrategy({
	clientID: passportConfig.clientID,
	clientSecret: passportConfig.clientSecret,
	callbackURL: "http://localhost:3000/admin/callback",
}, function(token, refreshToken, profile, done){
	return done(null, profile);
}));

app.get('/admin', passport.authenticate('facebook'));
app.get('/admin/callback', passport.authenticate('facebook', {
	successRedirect: '/',
	failureRedirect: '/admin'
}), function(req, res){
	console.log(req.session);
})

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
	res.sendFile('/public/index.html', { root: __dirname });
});

app.listen(port, function(err){
  console.log('connected at ', port);
});


