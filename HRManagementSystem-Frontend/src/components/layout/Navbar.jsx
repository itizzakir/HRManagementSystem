import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WorkBridgeLogoIcon } from '../ui/Icons';

const Navbar = () => {
    // State to hold the currently selected signup role
    const [selectedRole, setSelectedRole] = useState('user'); 
    
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle the signup button click
    const handleSignup = () => {
      // Navigate to the corresponding signup page based on the selected role
      if (selectedRole) {
        navigate(`/signup/${selectedRole}`);
      }
    };

    return (
        <header className="bg-green-800 text-white sticky top-0 z-50 shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <WorkBridgeLogoIcon />
                    WorkBridge
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="hover:text-green-300 transition-colors">Home</Link>
                    <a href="/#solutions" className="hover:text-green-300 transition-colors">Solutions</a>
                    <a href="/#resources" className="hover:text-green-300 transition-colors">Resources</a>
                    <a href="/#company" className="hover:text-green-300 transition-colors">Company</a>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                        Login
                    </Link>
                    
                    {/* --- NEW SIGNUP CONTROLS --- */}
                    <div className="flex items-center space-x-2">
                        {/* Role Selection Dropdown */}
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                            <option value="user">User</option>
                            <option value="hr">HR</option>
                            <option value="admin">Admin</option>
                        </select>

                        {/* Signup Button */}
                        <button
                            onClick={handleSignup}
                            className="bg-white text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;