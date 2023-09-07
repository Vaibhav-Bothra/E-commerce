const Orders = require('../models/orderplaced');
const Review = require('../models/review');
const User = require('../models/user');

module.exports.signin = function (req, res){
    return res.render('admin_sign_in');
}

module.exports.profile = async function (req, res){
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
    let order_img = [];
    let order_prodname = [];
    let order_price = [];
    let order_count_item = [];
    let order_user = [];
    await Orders.find({})
    .populate('user')
    .sort('-createdAt')
    .then((order)=>{
        console.log(order);
        for(let i=0;i<order.length;i++){
            order_img.push(order[i].img);
            order_prodname.push(order[i].prodname);
            order_price.push(order[i].price);
            order_count_item.push(order[i].count_item);
            order_user.push(order[i].user);
        }
    });
    return res.render('admin_profile',{
        description: desc,
        prod: products,
        all_users: users,
        order_imgs: order_img,
        order_prodnames: order_prodname,
        order_prices: order_price,
        order_count_items: order_count_item,
        order_users: order_user
    });
}