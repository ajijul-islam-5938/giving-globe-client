import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Navbarr from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbarr/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;