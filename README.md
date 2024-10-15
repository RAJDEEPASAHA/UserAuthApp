UserAuthApp
UserAuthApp is a comprehensive user authentication application built using the MERN Stack (MongoDB, Express, React, Node.js). It features a secure and efficient system for user registration, login, and OTP verification, making it easy to implement authentication in any web application.

Features
User Registration: Sign up with email verification to ensure valid accounts.
Secure Login: Password encryption and authentication using JWT.
OTP Verification: Two-step authentication for added security.
Password Visibility Toggle: Users can show or hide password inputs.
Error Handling & Notifications: Instant feedback with clear, user-friendly messages.
Responsive Design: Modern UI using React and Tailwind CSS, ensuring compatibility across devices.
Technologies Used
Frontend
ReactJS: Component-based UI.
Tailwind CSS: Responsive, utility-first CSS framework.
React Router: For navigation and routing.
React Icons: Icons for visual cues.
React Toastify: For notifications and alerts.
Backend
Node.js: JavaScript runtime.
Express.js: Fast and lightweight web framework.
MongoDB: NoSQL database for storing user data.
Mongoose: ODM for MongoDB interactions.
JWT (JSON Web Tokens): Secure user authentication.
Installation
Prerequisites
Node.js
MongoDB

Step 1: Clone the Repository
git clone https://github.com/yourusername/UserAuthApp.git
cd UserAuthApp
Install Dependencies:
cd backend
npm install
Frontend:
cd frontend
npm install
Step 3: Set Up Environment Variables
Backend (.env)
Create a .env file in the backend directory:
MONGODB_URI = mongodb+srv://mockUser:1234@mockcluster.et7xy.mongodb.net/mockDB?retryWrites=true&w=majority&appName=mockCluster
FRONTEND_URL = http://localhost:3000
TOKEN_SECRET_KEY = "hfegfgdkwjegfbjbjdbjabiyhwei"

Step 4: Run the Application
cd backend
npm run dev
Start Frontend
cd frontend
npm start
Folder Structure
UserAuthApp/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md
Usage
User Registration: Users can register by providing a name, email, and password. An OTP is sent for email verification.
Login: Registered users can log in using their email and password.
OTP Verification: Additional security layer with OTP sent to the registered email.
Contact & About Pages: Informative pages to engage users and provide details about the application.
Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. Please ensure that your contributions align with the coding standards used in the project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
React for creating a powerful frontend framework.
Node.js and Express for backend infrastructure.
MongoDB for providing a robust database solution.
Tailwind CSS for the utility-first design framework.
