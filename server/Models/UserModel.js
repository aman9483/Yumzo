const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: [true, 'Please enter the name'],
        trim: true,
        maxLength: 50,
    },

    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true,
        validate: [validator.isEmail, 'Please Enter a valid Email'],
    },

    password: {
        type: String,
        required: [true, 'Please Enter Your Password'],
        minLength: [8, 'Password should be greater than 8 characters'],
        select: false,
    },

   
    isAdmin: {
        type: Boolean,
        default: false, 
    },
});

module.exports = mongoose.model('User', UserSchema);
