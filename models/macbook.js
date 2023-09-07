const mongoose = require('mongoose');

const db = require('../config/mongoose');

const macbookSchema = new mongoose.Schema({
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
const Macbook = db.model('macbook', macbookSchema);

module.exports = Macbook;