import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Featured, Latest } from '../../components';
import { Logo, Football, Hussain, Coding, Tablet, eSport} from './imports';
import './News.css';
import axios from 'axios'

const News = () => {

    const [news, setnews] = useState([]);
    const [newsindex, setnewsindex] = useState(0);

    useEffect(() => { axios.get('/getnews').then((res) => setnews(res.data));}, []);




    return (
        <div className="news__container">
            <div className="news">
                <div className="news__navbar">
                    <Navbar filled="filled" text="FEATURED NEWS"/>
                    <Navbar filled="filled" text="NEWS"/>
                    <Navbar filled="none" text="RESEARCH"/>
                    <Navbar filled="none" text="EVENTS"/>
                </div>
                <div className="news__logo">
                    <img src={Logo} alt="UNLV CS Logo"/>
                </div>
            </div>
            
            <div className="news__header">
                <div className="news__featured">
                    <Featured story={news[newsindex]} />
                </div>
                <div className="news__latest">
                    <div className="news__latest-header">
                        <h1>Latest News</h1>
                        <div className="latest__bar"></div>
                    </div>
                    <Latest image={Hussain} text="Professor Hussain Aljafer won a 
                        Noble Prize from the Department of
                        Computer Science."/>
                    <Latest image={Coding} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                    <Latest image={Tablet} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                    <Latest image={eSport} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                </div>
            </div>
        </div>
        
    );
}

export default News;