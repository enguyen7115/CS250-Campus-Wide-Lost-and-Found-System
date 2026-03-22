import "./login.css";
import { useState } from "react";
import { login } from "../firebase.js";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    const navigate = useNavigate();

  return (
    <div className="login-container">
      <form className="login-form-container" onSubmit={(e) => login(e, navigate)}>
        <h1 className='login-title'>Log in to your account</h1>
        <input
          className="login-form-input"
          type="text"
          name = "email"
          placeholder="email"
          minLength="1"
          maxLength="20"
          value = {email}
          onChange={(e) => getEmail(e.target.value)}
          required
        />
        <input
          className="login-form-input"
          type="password"
          name = "password"
          placeholder="password"
          minLength="10"
          value = {password}
          onChange={(e) => getPassword(e.target.value)}
          required
        />
        <input className="login-input-submit" type="submit" value="Log In" />
        <a className="login-link" href="/signup">Dont have an account? Sign up here.</a>
      </form>
    </div>
  );
}
