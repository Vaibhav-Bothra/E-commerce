const mongoose = require('mongoose');

const db = require('../config/mongoose');

const cartSchema = new mongoose.Schema({
    img: [
        {
        type: String,
        unique: true
        }
    ],
    prodname: [
        {
        type: String,
        unique: true
        }
    ],
    price: [
        {
        type: String,
        unique: true
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