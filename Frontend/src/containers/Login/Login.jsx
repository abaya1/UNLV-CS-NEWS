import React, { useState } from 'react';
import './Login.css';
import {UNLV, Icon, Password} from './imports.js';
import axios from 'axios';






const Login =  () => {

    const[password, setPassword] = useState('');
    const[user, setUser] = useState('');

    const loginHelper = async (e) =>
    {
    e.preventDefault();
    const thing = await axios.get('/getadminspassword');

    if(thing.data.password == password && thing.data.username == user)
    {
       // redirect to  admin dashboard 
    }
    else
    {
        //display error message
    }


    return thing
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
                            <img src={Icon} />
                            <input type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)}/>
                        </div>
                        <div className="login__password">
                            <img src={Password} />
                            <input type="password" placeholder='Password' value={password}  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input type="submit" value="Sign In"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;