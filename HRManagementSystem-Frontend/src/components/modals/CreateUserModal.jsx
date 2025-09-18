import React, { useState } from 'react';
import { generateStrongPassword } from '../utils/PasswordGenerator'; // Import the generator

const CreateUserModal = ({ isOpen, onClose, onUserCreated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Employee',
    status: 'Active',
  });
  const [passwordOption, setPasswordOption] = useState('generate'); // 'generate' or 'manual'

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordOptionChange = (e) => {
    setPasswordOption(e.target.value);
    // Clear the manual password if switching back to auto-generate
    if (e.target.value === 'generate') {
      setFormData(prev => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let finalUserData;

    if (passwordOption === 'generate') {
      // In a real app, the backend would handle password/token generation.
      // We simulate it here to show the data being prepared.
      const generatedPassword = generateStrongPassword();
      finalUserData = { 
        id: Date.now(), 
        ...formData, 
        password: generatedPassword, // For simulation purposes
        requiresPasswordChange: true // A flag for the backend
      };
      console.log("Creating User with Auto-Generated Password:", finalUserData);
      alert(`User account for ${finalUserData.firstName} created! An invitation email has been sent for them to set their password. (Simulated)`);
    } else {
      // Manual password creation
      if (formData.password.length < 8) {
        alert("Temporary password must be at least 8 characters long.");
        return;
      }
      finalUserData = { 
        id: Date.now(), 
        ...formData,
        requiresPasswordChange: true 
      };
      console.log("Creating User with Manual Temporary Password:", finalUserData);
      alert(`User account for ${finalUserData.firstName} created with a temporary password. (Simulated)`);
    }
    
    onUserCreated(finalUserData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New User Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... existing fields for name, email ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
          </div>

          {/* --- NEW PASSWORD OPTIONS --- */}
          <div className="border-t border-gray-200 pt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password Setup</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="passwordOption"
                  value="generate"
                  checked={passwordOption === 'generate'}
                  onChange={handlePasswordOptionChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-800">Send Invitation Email</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="passwordOption"
                  value="manual"
                  checked={passwordOption === 'manual'}
                  onChange={handlePasswordOptionChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-800">Set Temporary Password</span>
              </label>
            </div>
          </div>

          {/* Conditional Password Input Field */}
          {passwordOption === 'manual' && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Temporary Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required // Only required if manual option is selected
                minLength="8"
              />
               <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long.</p>
            </div>
          )}

          {passwordOption === 'generate' && (
             <div className="p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700">
                An email will be sent to the user with a secure link to create their own password.
            </div>
          )}

          {/* ... other fields like Role and Status ... */}
          
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-700 hover:bg-green-800">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;