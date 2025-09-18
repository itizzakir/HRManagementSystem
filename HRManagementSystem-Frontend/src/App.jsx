import React from 'react';
// The fix is on the next line: adding 'Link' to the import
import { Routes, Route, Navigate, Link } from 'react-router-dom';

// --- Landing and Auth Pages ---
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import AdminSignup from './pages/AdminSignup';

// --- Onboarding Flow Pages ---
import ForceResetPassword from './pages/ForcedResetPassword';
// import AcceptInvitePage from './pages/AcceptInvitePage';

// --- Dashboard Home Pages ---
import AdminDashboard from './pages/dashboards/AdminDashboard/AdminDashboard';
import HrDashboard from './pages/dashboards/HrDashboard';
import UserDashboard from './pages/dashboards/UserDashboard/UserDashboard';

// --- User Dashboard Sub-Pages ---
import UserProfile from './pages/dashboards/UserDashboard/UserProfile';
import LeaveApplication from './pages/dashboards/UserDashboard/LeaveApplication';
import Payslips from './pages/dashboards/UserDashboard/Payslips';
import UserSettings from './pages/dashboards/UserDashboard/UserSetting';

// --- All Admin Section Pages ---
import UserManagementPage from './pages/dashboards/AdminDashboard/UserManagement';
import SystemSettingsPage from './pages/dashboards/AdminDashboard/SystemSettings';
import CompliancePage from './pages/dashboards/AdminDashboard/Compliance';
import ReportsPage from './pages/dashboards/AdminDashboard/ReportsPage';
import ProfilePage from './pages/dashboards/AdminDashboard/ProfilePage';
import SettingsPage from './pages/dashboards/AdminDashboard/SettingsPage';


function App() {
  return (
    <Routes>
      {/* --- Landing and Authentication Routes --- */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/admin" element={<AdminSignup />} />
      
      {/* --- Onboarding Routes for New Users --- */}
      <Route path="/force-reset-password" element={<ForceResetPassword />} />
      {/* <Route path="/accept-invite" element={<AcceptInvitePage />} /> */}

      {/* --- Admin Routes --- */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/user-management" element={<UserManagementPage />} />
      <Route path="/admin/system-settings" element={<SystemSettingsPage />} />
      <Route path="/admin/compliance" element={<CompliancePage />} />
      <Route path="/admin/reports" element={<ReportsPage />} />
      <Route path="/admin/profile" element={<ProfilePage />} />
      <Route path="/admin/settings" element={<SettingsPage />} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

      {/* --- HR Dashboard Route (Example) --- */}
      <Route path="/hr/dashboard" element={<HrDashboard />} />

      {/* --- User Routes --- */}
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/leave-application" element={<LeaveApplication />} />
      <Route path="/user/payslips" element={<Payslips />} />
      <Route path="/user/settings" emement={<UserSettings />} />
      <Route path="/user" element={<Navigate to="/user/dashboard" />} />

      {/* --- 404 Not Found Page --- */}
      <Route path="*" element={
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          {/* This Link component is what caused the error. It will now work correctly. */}
          <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go to Homepage</Link>
        </div>
      } />
    </Routes>
  );
}

export default App;