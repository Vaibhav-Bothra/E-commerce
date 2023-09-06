const mongoose = require('mongoose');

const db = require('../config/mongoose');

const reviewSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    rev: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

mongoose.pluralize(null);
const Review = db.model('Review', reviewSchema);

module.exports = Review;