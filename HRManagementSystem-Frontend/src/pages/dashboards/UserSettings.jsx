import React, { useState, useEffect } from "react";

const UserSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    language: "en",
  });

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("User settings saved successfully!");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">User Settings</h2>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleInputChange}
            className="form-checkbox"
          />
          <span className="ml-2">Enable Email Notifications</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleInputChange}
            className="form-checkbox"
          />
          <span className="ml-2">Enable Dark Mode</span>
        </label>
      </div>
      <div className="mb-6">
        <label className="block mb-2">Language</label>
        <select
          name="language"
          value={settings.language}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default UserSettings;
