import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import UserSignup from './pages/UserSignup'; // Import User Signup
import HrSignup from './pages/HrSignup';     // Import HR Signup
import AdminSignup from './pages/AdminSignup'; // Import Admin Signup

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      
      {/* Role-based signup routes */}
      <Route path="/signup/user" element={<UserSignup />} />
      <Route path="/signup/hr" element={<HrSignup />} />
      <Route path="/signup/admin" element={<AdminSignup />} />
    </Routes>
  );
}

export default App;