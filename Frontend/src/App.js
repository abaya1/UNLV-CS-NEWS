import React from 'react';
import { Events, News, Research} from './containers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<News />} />
            </Routes>
        </Router>
    );
};

export default App;
