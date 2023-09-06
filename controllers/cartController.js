const Cart = require('../models/cart');

module.exports.add = async function(req,res){
    const coll = require(`../models/${req.query.key}`);
    res.locals.cart_cnt=0;
    coll.find({_id:req.query.key2}).then((ele)=>{
        Cart.findOne({user:req.user._id}).then((e)=>{
            if(!e){
                Cart.create({
                    img:[ele[0].img],
                    prodname:[ele[0].prodname],
                    price:[ele[0].price],
                    count_item: [1],
                    user:req.user._id
                });
            }else{
                let flag = false;
                for(let i=0;i<e.img.length;i++){
                    if(e.img[i]==ele[0].img){
                        let val = e.count_item[i];
                        e.count_item[i]=val+1;
                        e.save();
                        flag=true;
                    }
                }
                if(!flag){
                    e.img.push(ele[0].img);
                    e.prodname.push(ele[0].prodname);
                    e.price.push(ele[0].price);
                    e.count_item.push(1);
                    e.save();
                }
            }
        })
    });
    return res.redirect('back');
};

module.exports.show = async function(req,res){
    let imgs = [];
    let prodnames = [];
    let prices = [];
    let qtys = [];
    await Cart.findOne({user:req.user._id}).then((item)=>{
        if(item){
            imgs = item.img;
            prodnames = item.prodname;
            prices = item.price;;
            qtys = item.count_item;
        }
    });
    let totalqty = 0;
    for(let i=0;i<qtys.length;i++){
        totalqty+=qtys[i];
    }
    let totalprice = 0;
    for(let i=0;i<prices.length;i++){
        let priceone=0;
        for(let j=0;j<prices[i].length;j++){
            if(prices[i].charCodeAt(j)>=48 && prices[i].charCodeAt(j)<=57){
                priceone=priceone*10+(prices[i][j]-'0');
            }
        }
        totalprice+=priceone*qtys[i];
    }
    return res.render('cartshow',{
        image: imgs,
        productnames: prodnames,
        price: prices,
        qts: qtys,
        totalcnt: totalqty,
        totalmoney: totalprice
    });
}

module.exports.addqty = function(req,res){
    Cart.findOne({user:req.user._id}).then((item)=>{
        item.count_item[req.params.idx]+=1;
        item.save();
    })
    return res.redirect('/users/cartshow');
}

module.exports.subtractqty = function(req,res){
    Cart.findOne({user:req.user._id}).then((item)=>{
        if(item.count_item[req.params.idx]>=1){
            item.count_item[req.params.idx]-=1;
            item.save();
        }
    })
    return res.redirect('/users/cartshow');
}

module.exports.delete = function(req,res){
    Cart.findOne({user:req.user._id}).then((item)=>{
        let a = [];
        let b = [];
        let c = [];
        let d = [];
        for(let i=0;i<item.img.length;i++){
            if(i!=req.params.idx){
                a.push(item.img[i]);
                b.push(item.prodname[i]);
                c.push(item.price[i]);
                d.push(item.count_item[i]);
            }
        }
        item.img = a;
        item.prodname = b;
        item.price = c;
        item.count_item = d;
        item.save();
    })
    return res.redirect('/users/cartshow');
}