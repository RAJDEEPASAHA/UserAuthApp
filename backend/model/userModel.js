const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role:{
      type : String
   },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
        default: null,
    },
    otpExpiry: {
        type: Date,
        default: null,
    },
},{
    timestamps : true
});

const User = mongoose.model('User', userSchema);

module.exports = User