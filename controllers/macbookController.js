const Macbook = require('../models/macbook');

module.exports.display = async function(req,res){
    let a = [];
    await Macbook.find({}).then((macbook)=>{
        for(let i=0; i<macbook.length; i++){
            var b = [];
            b.push(macbook[i].img,macbook[i].prodname,macbook[i].desc,macbook[i].price,macbook[i]._id);
            a.push(b);
        }
    })
    return res.render('macbook',{
        macbook_arr: a
    });
};