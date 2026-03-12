export default function Dashboard() {
    return (
        <div>
            <h1>Lost & Found Signup</h1>
            <form style={{ maxWidth: 400,  }}>
                <input type="text" placeholder="First Name" minLength="2" maxLength="20" style={{ display: "block", marginBottom: 10 }} />
                <input type="text" placeholder="Last Name" minLength="2" maxLength="20" style={{ display: "block", marginBottom: 10 }} />
                <input type="email" placeholder="Email" style={{ display: "block", marginBottom: 10 }} />
                <input type="password" placeholder="Password" minLength="6" style={{ display: "block", marginBottom: 10 }} />
                <input type="password" placeholder="Confirm Password" minLength="6" style={{ display: "block", marginBottom: 10 }} />
                <input type="submit" value="Signup" style={{ display: "block", marginBottom: 10 }} />
            </form>
        </div>
    );
}