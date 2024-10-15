import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Generaluser = () => {
  
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <div className="text-center p-6 text-gray-500 font-medium">No user data available</div>;
  }

  return (
    <div className="max-w-md mx-auto p-20 border border-gray-200 rounded-xl bg-gray-50 shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">User Dashboard</h1>
      <div className="mb-4 flex justify-between items-center">
        <strong className="text-gray-700">ID:</strong> <span className="text-gray-900">{user._id}</span>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <strong className="text-gray-700">Name:</strong> <span className="text-gray-900">{user.name}</span>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <strong className="text-gray-700">Email:</strong> <span className="text-gray-900">{user.email}</span>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <strong className="text-gray-700">Role:</strong> <span className="text-gray-900">{user.role}</span>
      </div>
      <div className="mb-4 flex justify-between items-center">
            <strong className="text-gray-700">Created At:</strong>
            <span className="text-gray-900">
                {moment(user.createdAt).format("DD/MM/YY, h:mm:ss a")}
            </span>
        </div>
      
    </div>
  );
};

export default Generaluser;
