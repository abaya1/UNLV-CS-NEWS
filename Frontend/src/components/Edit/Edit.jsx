import React, {useState, useEffect } from 'react';
import '../Delete/Delete.css';
import '../Add/Add.css';
import axios from 'axios';


const Edit = () => {
    const [news, setNews] = useState([]);
    const [edit, setEdit] = useState(-1);

    const [id , setid] = useState("");
    const [title , settitle] = useState("");
    const [story , setstory] = useState("");
    const [image , setImage] = useState("");

    const updatenews = () => 
    {

        if(image != "")
        {
            axios.post('/updatenews', {
                _id: id,
                Title: title,
                Story: story,
                Image: image,
                type: "news"
            })

        }
        else
        {
            axios.post('/updatenews', {
                _id: id,
                Title: title,
                Story: story,
                type: "news"
            })

        }

    }


    const editstuff = async (index) =>
    {
        const id = "ObjectId("

        setEdit(index);
        console.log(news[index])
        settitle(news[index].Title)
        setstory(news[index].Story)
        setid(news[index]._id)
    }

    useEffect(() => {

        const getNews = async () => {
            const data =  await axios.get('/getnews'); 
            setNews(data.data);
            console.log(data.data);
            
        }; 
        getNews();

    }, []);


    if(edit != -1)
    {
        return(
            <div className="add_component">
                <form onSubmit={updatenews} action="/postimage" method='POST' encType='multipart/form-data'>
                    <input className="add__title" type="text" value={title} onChange={ (e) => settitle( e.target.value)} placeholder="Title"/>
                    <textarea className="add__body"type="text"   value={story} onChange={ (e) => setstory( e.target.value)}/>
                    <input className="add__file" type="file" name='uploaded_file'   value={image} onChange={ (e) => setImage( e.target.value)}/>
                    <button className="add__button" type="submit" value="Submit"> Submit </button>
                </form>
            </div>
        );
    }
    else
    {
        return (
            <div className="delete__container">
                <table className="delete__table">
                    <tbody>
                        {news.map((datas, index) => (
                            <tr key={datas._id}>
                                <td className="delete__content">{datas.Title}</td>
                                <td className="delete__content"><button className="delete__button" onClick={() => {editstuff(index)}}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }



















}

export default Edit;