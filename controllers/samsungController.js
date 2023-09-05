const Samsung = require('../models/samsung');

module.exports.display = async function(req,res){
    let a = [];
    await Samsung.find({}).then((samsung)=>{
        for(let i=0; i<samsung.length; i++){
            var b = [];
            b.push(samsung[i].img,samsung[i].prodname,samsung[i].desc,samsung[i].price);
            a.push(b);
        }
    })
    return res.render('samsung',{
        samsung_arr: a
    });
};