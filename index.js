const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const passportLocal = require('./config/passport-local-strategy')
const flash = require('connect-flash');
const customWare = require('./config/middleware');

//git init for making git commits

const app = express();
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views','views');

app.use(session({
    name:"Ecommerce",
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

app.use(flash());
app.use(customWare.setFlash);

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err) console.log(`Error: ${err}`);
    console.log("Successfully set up the server.");
});