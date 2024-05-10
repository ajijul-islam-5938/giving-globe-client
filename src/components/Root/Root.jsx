import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Navbarr from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='w-full mx-auto'>
            <Navbarr />
            <div className="w-[98%] md:w-[90%] mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;