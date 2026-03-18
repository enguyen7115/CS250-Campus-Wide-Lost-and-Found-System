import { Routes, Route } from "react-router-dom";
import Layout from "./src/components/Layout";
import Home from "./src/pages/Home";
import Search from "./src/pages/Search";
import Report from "./src/pages/Report";
import Dashboard from "./src/pages/Dashboard";
import Login from "./src/pages/Login";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/report" element={<Report />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}
