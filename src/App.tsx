import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AdminPage from "./pages/AdminPage";
import TimePage from "./pages/TimePage";
import LeavePage from "./pages/LeavePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Default → Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch-all → Redirect to Login */}
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="/leave" element={<LeavePage />} />
      </Routes>
    </Router>
  );
};

export default App;
