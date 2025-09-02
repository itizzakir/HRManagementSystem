import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/Image/LoginPage.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    console.log({ email, password, rememberMe });
    // Simulate successful login and navigate to home
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-blue-800 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg px-8 py-10">
        {/* Logo / Branding */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-extrabold flex items-center justify-center">
            <span className="mr-2 text-yellow-400">🌉</span> WorkBridge
          </h1>
          <p className="text-sm text-gray-200 mt-2">
            Your HR Management Portal
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Remember + Reset */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-white">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-yellow-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow hover:bg-yellow-500 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
