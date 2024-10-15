import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Passwordreset = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
    });
    const navigate = useNavigate();
    const { email, newPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        const response = await fetch(SummaryApi.resetPassword.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
            toast.success(data.message);
            navigate("/login");
        } else {
            toast.error(data.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700">New Password</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="newPassword"
                                value={newPassword}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full p-2 rounded-lg focus:outline-none"
                            />
                            <div className='cursor-pointer p-2' onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-400"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Passwordreset;
