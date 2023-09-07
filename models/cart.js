const mongoose = require('mongoose');

const db = require('../config/mongoose');

const cartSchema = new mongoose.Schema({
    img: [
        {
        type: String
        }
    ],
    prodname: [
        {
        type: String
        }
    ],
    price: [
        {
        type: String
        }
    ],
    count_item: [
        {
            type: Number
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps: true
});

mongoose.pluralize(null);
const Cart = db.model('Cart', cartSchema);

module.exports = Cart;