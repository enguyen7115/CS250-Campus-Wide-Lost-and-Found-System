import './signup.css';

export default function Dashboard() {
    return (
        <div className="signup-container">
            <form className="form-container">
                <h1>Create an account</h1>
                <input className="form-input" type="text" placeholder="First Name" minLength="1" maxLength="20" />
                <input className="form-input" type="text" placeholder="Last Name" minLength="1" maxLength="20" />
                <input className="form-input" type="email" placeholder="Email" />
                <input className="form-input" type="password" placeholder="Password" minLength="10" />
                <input className="form-input" type="password" placeholder="Confirm Password" minLength="10" />
                <input className="input-submit" type="submit" value="Create Account" />
            </form>
        </div>
    );
}