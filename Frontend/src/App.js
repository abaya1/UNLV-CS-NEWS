import React from 'react';
import { Events, News, Research, Login, AdminDashboard} from './containers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/logAdmin" element={<Login/>} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
