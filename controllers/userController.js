const User = require('../models/user');

module.exports.signIn = function(req,res){
    return res.render('user_sign_in');
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up');
}

module.exports.create = function(req,res){
    User.findOne({email: req.body.email}).then((user)=>{
        if(!user){
            User.create({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
            }).then((user)=>{
                console.log(user);
                return res.redirect('/users/signin');
            })
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function(req, res){
    return res.redirect('/');
}