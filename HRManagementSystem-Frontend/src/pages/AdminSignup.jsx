import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, HomeIcon, WorkBridgeLogoIcon } from '../components/ui/Icons';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    adminEmail: '',
    organizationName: '',
    adminKey: '',
    password: '',
    confirmPassword: '',
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
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto lg:grid lg:grid-cols-2 rounded-xl shadow-lg overflow-hidden relative">
        
        <Link 
            to="/" 
            className="absolute top-4 right-4 text-gray-500 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
            aria-label="Back to Home"
        >
            <HomeIcon className="h-5 w-5" />
        </Link>
        
        <div 
          className="hidden lg:flex flex-col items-center justify-center p-12 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070')" }}
        >
            <h1 className="text-4xl font-bold mb-3">Administrator Control</h1>
            <p className="text-center max-w-sm">
                Register as an administrator to manage platform settings, oversee users, and ensure system integrity.
            </p>
        </div>

        <div className="bg-white p-8 md:p-10">
            <div className="text-center mb-8">

                {/* --- UPDATED LOGO AND HEADER --- */}
                <Link to="/" className="flex items-center justify-center text-gray-800 hover:text-green-700 transition-colors mb-4">
                    <WorkBridgeLogoIcon />
                    <span className="text-2xl font-bold">WorkBridge</span>
                </Link>

                <div className="flex justify-center mb-2">
                    <ShieldCheckIcon />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

                <div><label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
                <div><label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">E-mail</label><input type="email" name="adminEmail" id="adminEmail" value={formData.adminEmail} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
                <div><label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">Organization Name</label><input type="text" name="organizationName" id="organizationName" value={formData.organizationName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
                <div><label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">Registration Key</label><input type="password" name="adminKey" id="adminKey" value={formData.adminKey} placeholder="Enter the secret key" onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
                <div><label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label><input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
                <div><label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label><input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
                <div className="pt-4"><div className="flex items-start"><div className="flex items-center h-5"><input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleChange} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" /></div><div className="ml-3 text-sm"><label htmlFor="agreeTerms" className="font-medium text-gray-700">I agree to the <a href="#" className="text-green-600 hover:underline">Terms & Conditions</a></label></div></div></div>
                <div><button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">Create Account</button></div>
            </form>
        </div>
      </div>
    </div>
  );
};
export default AdminSignup;