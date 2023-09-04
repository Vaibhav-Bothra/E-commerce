const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//git init for making git commits

const app = express();
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views','views');

app.use(session({
    name:"dirProject",
    secret: "blahsomething", //this is the key which is used for encrypting the user id of the cookie.
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    }
}));

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err) console.log(`Error: ${err}`);
    console.log("Successfully set up the server.");
});