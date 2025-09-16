import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import AdminSignup from "./pages/AdminSignup"; // Keep Admin Signup
import AdminDashboard from "./pages/dashboards/AdminDashboard/AdminDashboard";
import HrDashboard from "./pages/dashboards/HrDashboard";
import UserDashboard from "./pages/dashboards/UserDashboard/UserDashboard";
import LeaveApplication from "./pages/dashboards/UserDashboard/LeaveApplication";
import Payslips from "./pages/dashboards/UserDashboard/Payslips";
import UserProfile from "./pages/dashboards/UserProfile";

// HrSignup and UserSignup are no longer imported

function App() {
  return (
    <Routes>
      {/* Landing and Auth Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/admin" element={<AdminSignup />} />

      {/* The routes for /signup/user and /signup/hr have been removed */}

      {/* Dashboard Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/hr/dashboard" element={<HrDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/leave-application" element={<LeaveApplication />} />
      <Route path="/user/payslips" element={<Payslips />} />
    </Routes>
  );
}

export default App;
