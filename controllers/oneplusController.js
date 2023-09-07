const Oneplus = require('../models/oneplus');

module.exports.display = async function(req,res){
    let a = [];
    await Oneplus.find({}).then((oneplus)=>{
        for(let i=0; i<oneplus.length; i++){
            var b = [];
            b.push(oneplus[i].img,oneplus[i].prodname,oneplus[i].desc,oneplus[i].price,oneplus[i]._id);
            a.push(b);
        }
    })
    return res.render('oneplus',{
        oneplus_arr: a
    });
};