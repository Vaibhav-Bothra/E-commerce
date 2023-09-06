const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req,email,password,done){
        User.findOne({email: email}).then((user)=>{
            if(!user || user.password != password){
                return done(null,false);
            }
            return done(null,user);
        })
    }
))

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User.findById(id).then((user)=>{
        return done(null,user);
    })
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/signin');
}

passport.alreadyAuthenticated = function(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return next();
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;