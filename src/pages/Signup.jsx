import './signup.css';
import axios from 'axios'
import { useState } from 'react';
import validator from 'validator';

function signupUser(e) {
    e.preventDefault()
    if (hasValidFields(e)) {
        axios({
            method: 'post',
            url: '/api/signup',
            data: {
                firstName: e.target[0].value,
                lastName: e.target[1].value,
                email: e.target[2].value,
                password: e.target[3].value,
            }
        }).then((response) => {
            console.log('API Response:', response.data);
        })
        .catch((error) => {
            console.error('API Error:', error);
        });
    }
}

function hasValidFields(e) {
    e.preventDefault()
    if (!validator.isEmail(e.target[2].value)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (e.target[3].value !== e.target[4].value) {
        alert("Passwords do not match!");
        return false;
    }
    return true;
}

export default function Dashboard() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="signup-container">
            <form className="form-container" onSubmit={signupUser}>
                <h1>Create an account</h1>
                <input className="form-input" type="text" placeholder="First Name" minLength="1" maxLength="20" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                <input className="form-input" type="text" placeholder="Last Name" minLength="1" maxLength="20" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                <input className="form-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input className="form-input" type="password" placeholder="Password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input className="form-input" type="password" placeholder="Confirm Password" minLength="6" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <input className="input-submit" type="submit" value="Create Account" />
                <a className="login-link" href="/login">Already have an account? Log in here.</a>
            </form>
        </div>
    );
}