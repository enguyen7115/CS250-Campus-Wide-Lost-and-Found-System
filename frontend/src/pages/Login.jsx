import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form className="form-container">
        <h1>Log in to your account</h1>
        <input
          className="form-input"
          type="text"
          placeholder="email"
          minLength="1"
          maxLength="20"
        />
        <input
          className="form-input"
          type="text"
          placeholder="password"
          minLength="10"
        />
        <input className="input-submit" type="submit" value="Log In" />
      </form>
    </div>
  );
}
