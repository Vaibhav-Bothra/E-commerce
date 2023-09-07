const Men = require('../models/men');

module.exports.display = async function(req,res){
    let a = [];
    await Men.find({}).then((men)=>{
        for(let i=0; i<men.length; i++){
            var b = [];
            b.push(men[i].img,men[i].prodname,men[i].desc,men[i].price,men[i]._id);
            a.push(b);
        }
    })
    return res.render('men',{
        men_arr: a
    });
};