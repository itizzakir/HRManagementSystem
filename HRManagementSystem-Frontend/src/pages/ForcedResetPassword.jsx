import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { WorkBridgeLogoIcon } from '../components/ui/Icons';

const ForceResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Securely get user info passed from the Login page
  const { email, role } = location.state || {};

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Redirect if user lands here directly without being sent from Login
  if (!email || !role) {
      // In a real app, you might navigate to login or an error page
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <p>Invalid access. Please log in first.</p>
          </div>
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    // --- SIMULATE API CALL ---
    // 1. Send the new password to the backend.
    // 2. The backend updates the password and sets `requiresPasswordChange` to false.
    console.log(`Password for ${email} successfully changed to: ${newPassword}`);
    alert("Your password has been updated successfully! You will now be redirected to your dashboard.");

    // 3. Redirect to the correct dashboard based on the user's role.
    const dashboardPath = `/${role}/dashboard`;
    navigate(dashboardPath);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10">
        <div className="text-center mb-8">
          <div className="text-green-700 text-3xl font-extrabold flex items-center justify-center hover:opacity-90 transition-opacity">
            <WorkBridgeLogoIcon className="h-8 w-8 text-green-700" />
            WorkBridge
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Create Your New Password</h1>
          <p className="text-sm text-gray-500 mt-2">
            For security, you must create a new password for your account: <strong>{email}</strong>
          </p>
        </div>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center font-semibold text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border-transparent focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border-transparent focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition duration-200">
            Set Password and Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForceResetPassword;