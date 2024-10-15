import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
           
            <main className="flex flex-col items-center justify-center text-center py-20 px-6">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to MyApp</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Your secure and reliable authentication solution. Manage your account and access personalized features with ease.
                </p>

                <div className="flex gap-4">
                    <Link 
                        to="/signup"
                        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-400 transition duration-300"
                    >
                        Get Started
                    </Link>
                    <Link 
                        to="/login"
                        className="px-6 py-2 border border-blue-600 text-blue-500 rounded-full hover:bg-blue-400 hover:text-white transition duration-300"
                    >
                        Login
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
