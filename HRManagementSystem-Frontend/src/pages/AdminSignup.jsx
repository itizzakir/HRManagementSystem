import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    adminEmail: '',
    organizationName: '',
    adminKey: '',
    password: '',
    confirmPassword: '', // Added for consistency
    agreeTerms: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // --- Form Validation ---
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    if (formData.password.length < 10) {
        setError("Admin password must be at least 10 characters long.");
        return;
    }
    if (!formData.agreeTerms) {
      setError("You must agree to the Administrator Agreement to create an account.");
      return;
    }

    console.log("Admin Signup Data:", formData);
    alert("Admin account created successfully! (Simulated)");
    // TODO: Add API call to send data to the backend, including key validation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to WorkFlow</h1>
            <p className="mt-2 text-sm text-gray-600">Register a new Admin account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">Administrator E-mail</label>
              <input type="email" name="adminEmail" id="adminEmail" value={formData.adminEmail} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">Organization Name</label>
              <input type="text" name="organizationName" id="organizationName" value={formData.organizationName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">Admin Registration Key</label>
              <input type="password" name="adminKey" id="adminKey" value={formData.adminKey} placeholder="Enter the secret key" onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
             {/* Added Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div className="pt-4"><div className="flex items-start"><div className="flex items-center h-5"><input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleChange} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" /></div><div className="ml-3 text-sm"><label htmlFor="agreeTerms" className="font-medium text-gray-700">I agree to the <a href="#" className="text-green-600 hover:underline">Administrator Agreement</a></label></div></div></div>
            <div><button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">Create Admin Account</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminSignup;