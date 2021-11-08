const mongoose = require('mongoose');

const EntriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

module.exports = Entries = mongoose.model('entry', EntriesSchema);