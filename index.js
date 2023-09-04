const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');

//git init for making git commits

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err) console.log(`Error: ${err}`);
    console.log("Successfully set up the server.");
});