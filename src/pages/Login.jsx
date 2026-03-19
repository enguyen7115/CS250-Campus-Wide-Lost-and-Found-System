import './login.css'

export default function Login() {
    return (
        <div className="login-container">
            <form className="login-form-container">
                <h1 className='login-title'>Log in to your account</h1>
                <input className="login-form-input" type="text" placeholder="email" minLength="1" maxLength="20" required/>
                <input className="login-form-input" type="password" placeholder="password" minLength="10" required/>
                <input className="login-form-submit" type="submit" value = "Log In" />
            </form>
        </div>

    )
}