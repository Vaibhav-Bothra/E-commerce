const Boat = require('../models/boat');

module.exports.display = async function(req,res){
    let a = [];
    await Boat.find({}).then((boat)=>{
        for(let i=0; i<boat.length; i++){
            var b = [];
            b.push(boat[i].img,boat[i].prodname,boat[i].desc,boat[i].price,boat[i]._id);
            a.push(b);
        }
    })
    return res.render('boat',{
        boat_arr: a
    });
};