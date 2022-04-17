import React from 'react';
import './Login.css';
import {UNLV, Icon, Password} from './imports.js';

const Login = () => {
    return (
        <div className="login">
            <img src= {UNLV} alt="UNLV logo"/>
            <div className="login__container">
                <h1>Welcome Back</h1>
                <p>Enter credentials to access admin account</p>
                <div className="login__value">
                    <form>
                        <div className="login__username">
                            <img src={Icon} />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="login__password">
                            <img src={Password} />
                            <input type="password" placeholder='Password' />
                        </div>
                        <input type="submit" value="Sign In"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;