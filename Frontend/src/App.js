import React from 'react';
import { Events, News, Research, Login} from './containers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/logAdmin" element={<Login/>} />
            </Routes>
        </Router>
    );
};

export default App;
