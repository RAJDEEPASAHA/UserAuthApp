const express = require('express')


const userLogout = require('../controller/userLogout')
const userSignupController = require('../controller/userSignup')

const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/userDetails')
const userLogInController = require('../controller/userLogin')
const allUser = require('../controller/allUser')
const { resetPassword } = require('../controller/resetPassword')
const sendOtp = require('../controller/sendOtp')
const { verifyOtp } = require('../controller/verifyOtp')



const router = express.Router()

router.post("/signup",userSignupController)
router.post("/login",userLogInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/user-Logout",userLogout)
router.get("/all-user",authToken,allUser)
router.post("/reset-password",resetPassword)
router.post("/sendOtp",sendOtp)
router.post("/verifyOtp",verifyOtp)

module.exports = router