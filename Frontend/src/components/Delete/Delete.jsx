import React, {useState, useEffect } from 'react';
import {ReactComponent as Logo} from '../../assets/trash-can-solid.svg';
import './Delete.css';
import axios from 'axios';


const Delete = () => {
    const [news, setNews] = useState([]);

    const deletestuff = async (data) =>
    {
        axios.post('/deletenews', data);
        const dat =  await axios.get('/getnews'); 
        setNews(dat.data);
        console.log(dat.data);
        

    }

    useEffect(() => {

        const getNews = async () => {
            const data =  await axios.get('/getnews'); 
            setNews(data.data);
            console.log(data.data);
            
        };
        getNews();

    }, []);
    return (
        <div className="delete__container">
            <table className="delete__table">
                <tbody>
                    {news.map((datas) => (
                        <tr key={datas._id}>
                            <td className="delete__content">{datas.Title}</td>
                            <td className="delete__content"><button className="delete__button" onClick={() => {deletestuff(datas)}}><Logo alt="delete icon" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Delete;