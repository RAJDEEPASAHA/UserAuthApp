import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUserDetails } from './stores/userSlice';
import Header from './components/Header';
import Context from './context';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <ToastContainer position="top-center" />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow bg-gray-100 p-2">
            <Outlet />
          </main>
          <Footer/>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;