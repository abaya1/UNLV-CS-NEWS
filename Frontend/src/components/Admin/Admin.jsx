import React from 'react';
import './Admin.css';

const Admin = ({title, color}) => {
    return (
        <div className={`btn-grad ${color}`}>
            <h1>{title}</h1>
        </div>
    );
};

export default Admin;