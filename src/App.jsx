import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { UserContext } from "./userState";
import { onAuthStateChanged } from "firebase/auth";
import { clientAuth } from "./firebase";

export default function App() {
    const [loginState, setLoginState] = useState(null);

    useEffect(() => {
        onAuthStateChanged(clientAuth, async (user) => {
            if (user) {
                setLoginState(true)
            } else {
                setLoginState(false)
            }
        })
    })

    return (
        <UserContext.Provider value={{loginState, setLoginState}}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>
        </UserContext.Provider>
    );
}