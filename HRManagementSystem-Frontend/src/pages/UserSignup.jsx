import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
    agreeTerms: false,
  });
  // State to hold and display any error messages
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  // This is the function that runs when you click the "Create Account" button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setError(''); // Clear previous errors

    // --- VALIDATION LOGIC ---
    // If this check fails, the function stops here and shows an error.
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return; 
    }
    
    // If this check fails, the function stops here.
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // If this check fails, the function stops here.
    if (!formData.agreeTerms) {
      setError("You must agree to the Terms and Privacy Policy to create an account.");
      return;
    }

    // --- SUCCESS ---
    // This code only runs if all the checks above pass.
    console.log("SUCCESS! User Signup Data:", formData);
    alert("User account created successfully! (This is a simulation)");
    // TODO: Add API call to send data to your backend here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to WorkFlow</h1>
            <p className="mt-2 text-sm text-gray-600">Register your User account</p>
          </div>
          
          {/* The `onSubmit` on the <form> tag is what makes the button work */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* This div will display the error message from the validation checks */}
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm font-semibold">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* All input fields go here... (code is the same as before) */}
              <div><label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label><input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
              <div><label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label><input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label><input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
              <div><label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label><input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" /></div>
              <div><label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label><input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
              <div><label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label><input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required /></div>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start"><div className="flex items-center h-5"><input id="newsletter" name="newsletter" type="checkbox" checked={formData.newsletter} onChange={handleChange} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"/></div><div className="ml-3 text-sm"><label htmlFor="newsletter" className="font-medium text-gray-700">Yes, I want to receive WorkFlow newsletters</label></div></div>
              <div className="flex items-start"><div className="flex items-center h-5"><input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleChange} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" /></div><div className="ml-3 text-sm"><label htmlFor="agreeTerms" className="font-medium text-gray-700">I agree to all the <a href="#" className="text-green-600 hover:underline">Terms</a>, <a href="#" className="text-green-600 hover:underline">Privacy Policy</a></label></div></div>
            </div>

            {/* This button has `type="submit"`, which triggers the form's `onSubmit` */}
            <div><button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">Create Account</button></div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">Already have an account?{' '}<Link to="/login" className="font-medium text-green-600 hover:text-green-500">Log In</Link></p>
        </div>
      </div>
    </div>
  );
};
export default UserSignup;