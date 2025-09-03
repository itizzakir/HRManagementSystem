import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-green-800 text-white sticky top-0 z-50 shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">WorkFlow</Link>
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
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                            className="bg-white text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors flex items-center"
                        >
                            Signup
                            <svg className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                                <Link to="/signup/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">User</Link>
                                <Link to="/signup/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">HR</Link>
                                <Link to="/signup/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;