import React from 'react';
import './Latest.css';


const Latest = ({story, index, changenews}) => {

    if(story == undefined)
    {
        return;
    }

    var image = story.Image
    image = image.substring(12 , image.length);

    return(
        <div className="latest__container">
            <div className="latest__image">
                <img src={require(`../../uploads/${image}`)}/>
            </div>
            
            <div className="latest__title">
                <h1>{story.Title}</h1>
                <a href="#" onClick={() => {console.log(index); changenews(index);}}>Read More</a>
            </div>
        </div>
    );
};

export default Latest;