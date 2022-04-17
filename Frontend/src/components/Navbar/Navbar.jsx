import React from 'react';
import Logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = ({filled, text}) => {
    return (
        <div className="navbar__container">
            <a href="#" className={filled}>{text}</a>
        </div>
    );
};

export default Navbar;