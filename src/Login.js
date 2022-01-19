import React, { useState } from 'react';
import './Login.css';
import { BrowserRouter, Swtich, Route, Router, Link } from "react-router-dom"
import { useHistory } from 'react-router';
import { auth } from './firebase';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img src="https://www.doorwaysva.org/wp-content/uploads/2020/08/amazon-logo-transparent.png" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>
                    Sign-In
                </h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Accout</button>
            </div>
        </div>
    )
}

export default Login
