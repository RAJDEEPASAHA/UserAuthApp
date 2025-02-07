const User = require('../model/userModel');

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;



    const user = await User.findOne({ email })
    console.log(user)



    if (otp == user.otp) {

        return res.status(200).json({
            success: true,
            message: 'OTP verified successfully.'
        });
    } else {
        return res.status(400).json({
            success: false,
            message: 'Invalid OTP'
        });
    }
};


module.exports = { verifyOtp };