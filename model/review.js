import mongoose from 'mongoose'; 

const reviewSchema = new mongoose.Schema({
    name: String,
    vendor: String,
    product: String,
    rating: Number,
    review: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
}); 

module.exports = mongoose.model('Review', reviewSchema); 