import React, { useState } from 'react';
import './Add.css';
import axios from 'axios';

const Add = () => {

    const [title , settitle] = useState("");
    const [story , setstory] = useState("");
    const [image , setImage] = useState([]);


    const postnews = () =>
    {


        axios.post('/postnews', {
            Title: title,
            Story: story,
            Image: image,
            type: "news"
        })


    }

    return(
        <div className="add_component">
            <form onSubmit={postnews} action="/postimage" method='POST' encType='multipart/form-data'>
                <input className="add__title" type="text" value={title} onChange={ (e) => settitle( e.target.value)} placeholder="Title"/>
                <input className="add__body"type="text"   value={story} onChange={ (e) => setstory( e.target.value)}/>
                <input className="add__file" type="file" name='uploaded_file'   value={image} onChange={ (e) => setImage( e.target.value)}/>
                <button className="add__button" type="submit" value="Submit"> Submit </button>
            </form>
        </div>
    );
};

export default Add;