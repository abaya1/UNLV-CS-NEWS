import React from 'react';
import './Add.css';

const Add = () => {
    return(
        <div className="add_component">
            <form>
                <input className="add__title" type="text" placeholder="Title"/>
                <input className="add__body"type="text" />
                <input className="add__file" type="file" />
                <button type="submit" value="Submit"> Submit </button>
            </form>
        </div>
    );
};

export default Add;