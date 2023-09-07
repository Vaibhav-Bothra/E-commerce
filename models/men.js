const mongoose = require('mongoose');

const db = require('../config/mongoose');

const menSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
        unique: true
    },
    prodname: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

mongoose.pluralize(null);
const Men = db.model('men', menSchema);

module.exports = Men;