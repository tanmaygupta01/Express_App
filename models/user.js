const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        min: 0
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;