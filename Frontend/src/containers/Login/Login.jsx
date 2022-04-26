import React, { useState } from 'react';
import './Login.css';
import {UNLV, Icon, Password} from './imports.js';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {

    const[password, setPassword] = useState('');
    const[user, setUser] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const [authenticate, setAuthenticate] = useState(false);
    let navigate = useNavigate();

    const loginHelper = async (e) =>
    {
        e.preventDefault();
        const thing = await axios.get('/getadminspassword');

        if(thing.data.password === password && thing.data.username === user)
        {
            setAuthenticate(true);
        }
        else
        {
            setErrorMessage('Invalid login.');
            return thing
        }
    }

    function onHandleClick() {
        if(authenticate === true){
            navigate('/AdminDashboard');
        }
    }

    return (
        <div className="login">
            <img src= {UNLV} alt="UNLV logo"/>
            <div className="login__container">
                <h1>Welcome Back</h1>
                <p>Enter credentials to access admin account</p>
                <div className="login__value">
                    <form onSubmit={loginHelper}>
                        <div className="login__username">
                            <img src={Icon} alt="username icon"/>
                            <input type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)}/>
                        </div>
                        <div className="login__password">
                            <img src={Password} alt="password icon"/>
                            <input type="password" placeholder='Password' value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" onClick={onHandleClick}> Sign In</button>
                    </form>
                </div>
            </div>
            {errorMessage && <div className="login__error"> {errorMessage} </div>}
        </div>
    );
}

export default Login;