const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    imageURL: {
        type: Number,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    locationCoordinates: {
        type: Object,  // {lat: 123, long: 123}
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    timeReported: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

const User = mongoose.model('user', itemSchema);

module.exports = {
    USER: User
};