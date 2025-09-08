import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import bgImage from '../assets/Image/LoginBgImg.jpg';
import { WorkBridgeLogoIcon, HomeIcon } from '../components/ui/Icons';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // <-- Add error state
  const navigate = useNavigate(); // <-- Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // --- DEMO LOGIN LOGIC ---
    if (email === 'admin@workbridge.com' && password === 'admin1234') {
      navigate('/admin/dashboard');
    } else if (email === 'hr@workbridge.com' && password === 'hr1234') {
      navigate('/hr/dashboard');
    } else if (email === 'user@workbridge.com' && password === 'user1234') {
      navigate('/user/dashboard');
    } else {
      setError("Invalid credentials. Please try again with the demo accounts.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-green-800 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Link
        to="/"
        className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-20"
        aria-label="Back to Home"
      >
        <HomeIcon className="h-6 w-6" />
      </Link>

      <div className="absolute inset-0 bg-green-900 opacity-70"></div>

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg px-8 py-10">
        
        <div className="text-center mb-8">
          <Link to="/" className="text-white text-3xl font-extrabold flex items-center justify-center hover:opacity-90 transition-opacity">
            <WorkBridgeLogoIcon />
            WorkBridge
          </Link>
          <p className="text-sm text-gray-200 mt-2">
            Your Trusted Partner in HR Excellence
          </p>
        </div>

        {/* --- ERROR MESSAGE DISPLAY --- */}
        {error && <div className="mb-4 p-3 bg-red-500/50 text-white rounded-lg text-center font-semibold">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">E-mail Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border-transparent focus:outline-none focus:ring-2 focus:ring-green-600" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border-transparent focus:outline-none focus:ring-2 focus:ring-green-600" required />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-white">
              <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-300 hover:underline">Forgot Password?</a>
          </div>

          <button type="submit" className="w-full py-2 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700 transition duration-200">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;