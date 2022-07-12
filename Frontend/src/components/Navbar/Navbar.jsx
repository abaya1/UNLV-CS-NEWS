import React from 'react';
import Logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = ({filled, text}) => {
    if(text == "ADMIN LOGIN")
    {
        return (
        <div className="navbar__container">
        <Link to="/logAdmin" className={filled}>{text}</Link>
        </div>
        );  
    }
    
    
    return (
        <div className="navbar__container">
            <a href="#" className={filled}>{text}</a>
        </div>
    );
};

export default Navbar;
