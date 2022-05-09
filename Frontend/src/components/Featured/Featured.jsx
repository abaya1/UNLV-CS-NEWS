import React, {useState} from 'react';
import './Featured.css';

const Featured = ({story}) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }
   
    if(story != undefined)
    {

        var image = story.Image
        image = image.substring(12 , image.length)
        console.log(image)
    
    
        return (
            <div className="featured__container">
                <h1>{story.Title}</h1>
                <img src={require(`../../uploads/${image}`)} alt="picture" />
                <p>
                {isReadMore ? story.Story.slice(0,300) : story.Story}
                    <br/>
                    <span onClick={toggleReadMore} className="featured__readMore">
                        {isReadMore ? "Read More" : "See Less"}
                    </span>
                </p>
            </div>
        );
    }
    else
    {
        return;
    }
   
};


export default Featured;