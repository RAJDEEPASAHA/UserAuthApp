import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';



const AllUsers = () => {
    const [allUser, setAllUsers] = useState([]);
  

    const fetchAllUsers = async () => {
        const fetchData = await fetch(SummaryApi.allUser.url, {
            method: SummaryApi.allUser.method,
            credentials: 'include'
        });

        const dataResponse = await fetchData.json();

        if (dataResponse.success) {
            setAllUsers(dataResponse.data);
        }

        if (dataResponse.error) {
            toast.error(dataResponse.message);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className='bg-gray-50 p-20 rounded-lg shadow-md'>
            <table className='w-full bg-white rounded-lg shadow-sm border-collapse'>
                <thead>
                    <tr className='bg-blue-600 text-white'>
                        <th className='px-6 py-3 text-left text-sm font-semibold'>Sr.</th>
                        <th className='px-6 py-3 text-left text-sm font-semibold'>Name</th>
                        <th className='px-6 py-3 text-left text-sm font-semibold'>Email</th>
                        <th className='px-6 py-3 text-left text-sm font-semibold'>Role</th>
                        <th className='px-6 py-3 text-left text-sm font-semibold'>Created Date</th>
                        <th className='px-6 py-3 text-left text-sm font-semibold'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((el, index) => {
                            return (
                                <tr key={el._id} className='hover:bg-gray-100 border-b last:border-none'>
                                    <td className='px-6 py-4 text-sm text-gray-800'>{index + 1}</td>
                                    <td className='px-6 py-4 text-sm text-gray-800'>{el?.name}</td>
                                    <td className='px-6 py-4 text-sm text-gray-800'>{el?.email}</td>
                                    <td className='px-6 py-4 text-sm text-gray-800'>{el?.role}</td>
                                    <td className='px-6 py-4 text-sm text-gray-800'>{moment(el?.createdAt).format('LL')}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            
        </div>
    );
}

export default AllUsers;
