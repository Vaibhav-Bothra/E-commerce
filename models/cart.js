const mongoose = require('mongoose');

const db = require('../config/mongoose');

const cartSchema = new mongoose.Schema({
    img: [
        {
        type: String,
        required: true,
        }
    ],
    prodname: [
        {
        type: String,
        required: true
        }
    ],
    price: [
        {
        type: String,
        required: true
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