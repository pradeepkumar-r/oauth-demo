var authenticate = require('./authenticate');
var passport = require('passport')
console.log('pradeep')
var express = require('express');
//var path = require('path');
var app = express();

//var auth=require('./auth.js');

app.set('view engine', 'ejs');

app.locals.siteTitle = 'Oauth';


app.use(express.urlencoded({ extended: true }))

app.use(express.json());

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
    console.log('REDIRECT TO HOME');
    response.render('index')
});
app.listen(3000, () => {
    console.log("Running on port 3000")
});

app.use(passport.initialize());
app.get('/auth/facebook', passport.authenticate('facebook'))

app.get('/auth/facebook/callback', passport.authenticate('facebook-token'), (req, res) => {
    console.log("In req part")
    if (req.profile) {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'You are successfully logged in!' });
    } else {
        console.log("NULL");
    }
});