import { Link } from "react-router-dom";

export default function Layout({ children }) {
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
                <Link to="/signup">Signup</Link>
            </nav>

            <div>{children}</div>
        </div>
    );
}