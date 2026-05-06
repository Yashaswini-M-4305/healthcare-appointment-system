const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    experience: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        default: 0
    },

    availableSlots: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model("Doctor", doctorSchema);