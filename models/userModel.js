const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    Email: {
        type: String,
        required: [true, 'please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    Password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    }
})


const User = mongoose.model('User', userSchema);



module.exports = User;