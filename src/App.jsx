import React from 'react';
import Navbar from './components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthContextPrivider } from './context/AuthContext';
import Footer from './components/Footer';
import SkeletonComponent from './components/Skleton';
import { useEffect } from 'react';
import { useState } from 'react';
import BasicModal from './components/Modal';
import TestYoutube from './components/TestYoutube';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);// eslint-disable-line
  return (
    <>
      {/* <TestYoutube /> */}
      <AuthContextPrivider>
        {
          location.pathname === '/video' ? '' : <Navbar/> 
        }
        {isLoading ? <SkeletonComponent /> : <Outlet />}
        <Footer/>
        <BasicModal />
      </AuthContextPrivider>
    </>
  )
}

export default App