import React from 'react';
import './Featured.css';

const Featured = ({image}) => {
    return (
        <div className="featured__container">
            <h1>FEATURED NEWS</h1>
            <img src={image} alt="Football logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
            <p><span><a href="#">Read More</a></span></p>
        </div>
    );
};

export default Featured;