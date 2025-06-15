import mongoose from 'mongoose'; 

const review = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: false
    },
    vendor: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        required: false,
        maxlength: 250
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}); 

module.exports = mongoose.model('Review', review); 