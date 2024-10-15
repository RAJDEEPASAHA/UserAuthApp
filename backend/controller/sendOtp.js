const nodemailer = require('nodemailer');
const crypto = require('crypto');
const userModel = require('../model/userModel')

const sendOtp = async (email) => {
    const otp = crypto.randomInt(100000, 999999); 

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rajdeepawork@gmail.com', 
            pass: 'zxso nnrg ggjt elrv', 
        },
    });

    const mailOptions = {
        from: 'rajdeepawork@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    };
    
    await transporter.sendMail(mailOptions);
   
    return { otp };
};

module.exports = sendOtp