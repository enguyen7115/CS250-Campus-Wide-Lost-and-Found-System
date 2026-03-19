import './signup.css';
import { useState } from 'react';
import axios from 'axios'
import validator from 'validator'

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
        }).catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('An error occurred during signup. Please try again later.');
            }
        });
    }
}

function hasValidFields(e) {
    if (!validator.isEmail(e.target[2].value)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (e.target[3].value !== e.target[4].value) {
        alert("Passwords do not match!");
        return false;           
    }
    return true
}

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="signup-container">
            <form className="signup-form-container" onSubmit={signupUser}>
                <h1 className='signup-title'>Create an account</h1>
                <input className="signup-form-input" type="text" placeholder="First Name" minLength="1" maxLength="20" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                <input className="signup-form-input" type="text" placeholder="Last Name" minLength="1" maxLength="20" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                <input className="signup-form-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input className="signup-form-input" type="password" placeholder="Password" minLength="10" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input className="signup-form-input" type="password" placeholder="Confirm Password" minLength="10" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <input className="signup-form-submit" type="submit" value="Create Account" />
                <a className="login-link" href="/login">Already have an account? Log in here.</a>
            </form>
        </div>
    );
}