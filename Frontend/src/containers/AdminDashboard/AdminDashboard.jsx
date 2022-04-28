import React from 'react';
import { Admin } from '../../components';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return(
        <div className="dashboard">
            <div className="dashboard__header">
                <h1 className="dashboard__title">Dashboard</h1>
            </div>
            <div className="dashboard__selection">
                <div className="dashboard__single">
                    <Admin title="Add" color="red"/>
                </div>
                <div className="dashboard__single">
                    <Admin title="Edit" color="blue"/>
                </div>
                <div className="dashboard__single">
                    <Admin title="Delete" color="black"/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;