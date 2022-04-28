import React from 'react';
import './Admin.css';

const Admin = ({title, color}) => {
    return (
        <div className="admin__container">
            <div className={color}>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Admin;