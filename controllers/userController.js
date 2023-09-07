const User = require('../models/user');
const Orders = require('../models/orderplaced');
const Review = require('../models/review');

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
                name: req.body.name,
                address: req.body.address
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
    req.flash('success','Logged in successfully!!');
    if(req.user.email=="vaibhavadmin@gmail.com" && req.user.password=="admin123"){
        return res.redirect('/admin/main');
    }else{ 
        return res.redirect('/');
    }
}

module.exports.signOut = function(req,res){
    req.logout(function(err){
        if(err){
            console.log("Error in logging out of the page:",err);
            return res.redirect('back');
        }
        req.flash('success','You have logged out successfully!');
        return res.redirect('/');
    });
}

module.exports.profile = function(req, res){
    let boughtimg = [];
    let boughtprodname = [];
    let boughtprice = [];
    let boughtcount = [];
    Orders.findOne({user:req.user._id}).then((ele)=>{
        if(ele){
            boughtimg = ele.img;
            boughtprodname = ele.prodname;
            boughtprice = ele.price;
            boughtcount = ele.count_item;
        }
    });
    User.findById(req.user._id).then((user)=>{
        return res.render('profile',{
            curruser: user,
            imgbought: boughtimg,
            prodnamebought: boughtprodname,
            pricebought: boughtprice, 
            countbought: boughtcount
        });
    })
}

module.exports.createreview = function(req, res){
    Review.create({
        product: req.body.prdct,
        rev: req.body.dsc,
        user: req.user._id
    });
    return res.redirect('/users/review');
}

module.exports.review = async function(req, res){
    let desc= [];
    let products = [];
    let users = [];
    await Review.find({})
    .populate('user')
    .sort('-createdAt')
    .then((review)=>{
        console.log(review);
        for(let i=0;i<review.length;i++){
            desc.push(review[i].rev);
            products.push(review[i].product);
            users.push(review[i].user.name);
        }
    });
    return res.render('review',{
        review_desc: desc,
        review_products: products,
        review_users:users
    });
}