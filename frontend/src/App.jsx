import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import Search from "../src/pages/Search";
import Report from "../src/pages/Report";
import Dashboard from "../src/pages/Dashboard";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import { useState, useEffect } from "react";
import { UserContext } from "./userState.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { clientAuth } from "../src/firebase.js";


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
                    <Route path="/report" element={loginState ? <Report /> : <Navigate to= "/login" />} />
                    <Route path="/dashboard" element={loginState ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/signup" element={loginState ? <Navigate to= "/" /> : <Signup />} />
                    <Route path="/login" element={loginState ? <Navigate to= "/" /> : <Login />} />
                </Routes>
            </Layout>
        </UserContext.Provider>
  );
}
