import React, {useState, useEffect, Fragment} from 'react';
import './Edit.css';
import axios from 'axios';

const Edit = () => {

    const [news, setNews] = useState([]);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {

        const getNews = async () => {
            const data =  await axios.get('/getnews'); 
            setNews(data.data);
            console.log(data.data);
            
        };
        getNews();

    }, []);
    
    const editText = (props) => {
        return (
            <Fragment>
                <form>
                    {news.map((datas) => {
                        <textarea className="edit__title" type="text">{datas.title}</textarea>
                        
                    })}
                    <h1>But what</h1>
                </form>
            </Fragment>
        )
    }

    return(
        <div className="edit__content">
            <table className="edit__table">
                <tbody>
                    {news.map((datas) => (
                        <tr key={datas._id}>
                            <td className="delete__content">{datas.Title}</td>
                            <td className="delete__content"><button className="delete__button" onClick={() => setShowAdd((showAdd) => !showAdd)}>Edit</button>
                            {showAdd && <editText/>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Edit;