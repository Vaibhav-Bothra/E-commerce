const Iphone = require('../models/iphone');

module.exports.display = async function(req,res){
    let a = [];
    await Iphone.find({}).then((iphones)=>{
        console.log(iphones);
        for(let i=0; i<iphones.length; i++){
            var b = [];
            b.push(iphones[i].img,iphones[i].prodname,iphones[i].desc,iphones[i].price);
            a.push(b);
        }
    })
    return res.render('iphone',{
        iphone_arr: a
    });
};