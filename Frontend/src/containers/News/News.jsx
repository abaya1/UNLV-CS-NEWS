import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Featured, Latest } from '../../components';
import { Logo, Football, Hussain, Coding, Tablet, eSport} from './imports';
import { RiMenu2Fill, RiCloseLine } from 'react-icons/ri';
import './News.css';
import axios from 'axios'

const Menu = () => (
    <React.Fragment>
        <p><a href="#">FEATURED NEWS</a></p>
        <p><a href="#">RESEARCH</a></p>
        <p><a href="#">EVENTS</a></p>
    </React.Fragment>
)

const News = () => {

    const [news, setnews] = useState([]);
    const [newsindex, setnewsindex] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);
    
    
    useEffect(() => { axios.get('/getnews').then((res) => {setnews(res.data); console.log('here1')}).then(() => {setnewsindex(2); console.log('here2')})}, []);
    useEffect(() => {setnewsindex(news.length - 1); console.log('here2')}, [news]);
    
    

    const displaylatest = () =>
    {
        const map = news.map((story , index) => news.length - index > news.length - 5 && <Latest story={news[news.length - index -1]} index={news.length - index -1}   changenews={changenews}/> )

        return map;
    }

    const changenews = (num) =>
    {
        setnewsindex(num);
    }

    const mobilemenu = () => 
    {
        if(toggleMenu == true)
        {
            return(
                <div className="navbar__mobile-container">
                    <div className="navbar__mobile-menu">
                            <Menu/>
                    </div>
                </div>
                );
            
        }
            
        
    }



    return (
        <div className="news__container">
            <div className="news">
                <div className="news__navbar-mobile">
                    {toggleMenu 
                        ? <RiCloseLine color="var(--dark-red)" size={28} onClick={() => setToggleMenu(false)} />
                        : <RiMenu2Fill color = 'var(--dark-red' size={28} onClick={() => setToggleMenu(true)}/> 
                    }
                    {mobilemenu()}
                </div>
                <div className="news__navbar">
                    <Navbar filled="filled" text="FEATURED NEWS"/>
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
                    {displaylatest()}
                </div>
            </div>
        </div>
        
    );
}

export default News;