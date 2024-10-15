import React, { useState } from 'react';
import { FaRegCircleUser} from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../stores/userSlice';
import ROLE from '../common/role';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };

  const handleUserIconClick = () => {
    setMenuDisplay(prev => !prev);
  };

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-6 justify-between'>
        
       
        <Link to="/" className="text-xl font-bold text-blue-500">
          MyApp
        </Link>
        
      
        <nav className='flex items-center gap-6'>
          <Link to="/about" className='text-gray-700 hover:text-blue-500'>
            About Us
          </Link>
          <Link to="/contact" className='text-gray-700 hover:text-blue-500'>
            Contact Us
          </Link>
          <Link to="/signup" className='text-gray-700 hover:text-blue-500'>
            Signup
          </Link>
        </nav>

       
        <div className='flex items-center gap-4'>
          <div className='relative'>
           
            <div 
              className='text-2xl cursor-pointer flex justify-center' 
              onClick={handleUserIconClick}
            >
              <FaRegCircleUser />
            </div>

            {menuDisplay && (
              <div className='absolute bg-white top-12 right-0 h-fit p-2 shadow-lg rounded'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link 
                      to={"/allusers"} 
                      className='whitespace-nowrap hover:bg-slate-100 p-2 block' 
                      onClick={handleUserIconClick}
                    >
                      All Users
                    </Link>
                  )}

                  {user?.role === ROLE.GENERAL && (
                    <Link 
                      to={"/generalusers"} 
                      className='whitespace-nowrap hover:bg-slate-100 p-2 block' 
                      onClick={handleUserIconClick}
                    >
                      General User
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>

         
          <div>
            {user?._id ? (
              <button 
                onClick={handleLogout} 
                className='px-3 py-1 rounded-full flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-400 transition duration-300'
              >
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <Link 
                to={"/login"} 
                className='px-3 py-1 rounded-full flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-400 transition duration-300'
              >
                <FaSignInAlt /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
