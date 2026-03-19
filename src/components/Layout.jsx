import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../userState";
import { signout } from "../firebase.js";

export default function Layout({ children }) {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    return (
        <div>
            <nav
                style={{
                    padding: "12px 20px",
                    borderBottom: "1px solid #ccc",
                    display: "flex",
                    gap: 20,
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/report">Report</Link>
                <Link to="/dashboard">Dashboard</Link>
                {currentUser ? '' : 
                    <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
                }
                <div style={{ marginLeft: "auto" }}></div>
                {currentUser ? 
                    <>
                    <label className='signout-label' onClick={signout}>Sign Out</label>
                    </> : '' 
                }
            </nav>

            <div>{children}</div>
        </div>
    );
}