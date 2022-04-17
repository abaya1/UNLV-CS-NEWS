import React from 'react';
import './Latest.css';


const Latest = ({image, text}) => {
    return(
        <div className="latest__container">
            <img src={image}/>
            <div className="latest__title">
                <h1>{text}</h1>
                <a href="#">Read More</a>
            </div>
        </div>
    );
};

export default Latest;