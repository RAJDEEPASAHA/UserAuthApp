const backend_Domain = "https://userauthapp-qcw0.onrender.com" //"http://localhost:8080"

const SummaryApi = {
    signup: {
        url: `${backend_Domain}/api/signup`,
        method: "post"
    },
    login: {
        url: `${backend_Domain}/api/login`,
        method: "post"
    },
    current_user: {
        url: `${backend_Domain}/api/user-details`,
        method: "get"
    },
    logout_user: {
        url: `${backend_Domain}/api/user-Logout`,
        method: "get"
    },
    allUser: {
        url: `${backend_Domain}/api/all-user`,
        method: "get"
    },
    resetPassword: {
        url: `${backend_Domain}/api/reset-password`,
        method: "get"
    },
    sendOtp: {
        url: `${backend_Domain}/api/sendOtp`,
        method: "post"
    },
    verifyOtp: {
        url: `${backend_Domain}/api/verifyOtp`,
        method: "post"
    },

}




export default SummaryApi
