import './login.css'
import { useState } from 'react';
import { login } from '../firebase.js'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <form className="login-form-container" onSubmit={login}>
                <h1 className='login-title'>Log in to your account</h1>
                <input className="login-form-input" name='email' type="text" placeholder="Email" minLength="1" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input className="login-form-input" name='password' type="password" placeholder="Password" minLength="10" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input className="login-form-submit" type="submit" value = "Log In" />
                <a className="signup-link" href="/signup">Don't have an account? Sign up here.</a>
            </form>
        </div>

    )
}