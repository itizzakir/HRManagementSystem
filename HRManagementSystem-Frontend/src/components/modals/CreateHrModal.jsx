import React, { useState } from 'react';
import { generateStrongPassword } from '../utils/PasswordGenerator'; // Import the generator

const CreateHrModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    jobTitle: '',
    password: '',
  });
  const [passwordOption, setPasswordOption] = useState('generate'); // 'generate' or 'manual'

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordOptionChange = (e) => {
    setPasswordOption(e.target.value);
    if (e.target.value === 'generate') {
      setFormData(prev => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (passwordOption === 'generate') {
      const generatedPassword = generateStrongPassword();
      const finalHrData = { ...formData, password: generatedPassword, requiresPasswordChange: true };
      console.log("Creating HR Account with Auto-Generated Password:", finalHrData);
      alert(`HR account for ${finalHrData.fullName} created! An invitation email has been sent. (Simulated)`);
    } else {
      if (formData.password.length < 8) {
        alert("Temporary password must be at least 8 characters long.");
        return;
      }
      const finalHrData = { ...formData, requiresPasswordChange: true };
      console.log("Creating HR Account with Manual Temporary Password:", finalHrData);
      alert(`HR account for ${finalHrData.fullName} created with a temporary password. (Simulated)`);
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New HR Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... existing fields for name, email, etc. ... */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="fullName" id="fullName" onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
          </div>
          <div>
            <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">Work Email</label>
            <input type="email" name="workEmail" id="workEmail" onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" name="companyName" id="companyName" onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
          </div>
           <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" name="jobTitle" id="jobTitle" onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
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

          {passwordOption === 'manual' && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Temporary Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
                minLength="8"
              />
              <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters long.</p>
            </div>
          )}
           {passwordOption === 'generate' && (
             <div className="p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700">
                An email will be sent to the new HR user with a secure link to set their password.
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green-700 hover:bg-green-800">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHrModal;