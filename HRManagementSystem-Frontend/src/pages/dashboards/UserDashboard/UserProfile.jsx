import React, { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { PencilIcon } from "../../../components/ui/Icons";
import profileImg from "../../assets/Image/profile-avatar.png";

const menuItems = [
  "Personal Details",
  "Contact Details",
  "Next of kin Details",
  "Education Qualifications",
  "Guarantor Details",
  "Family Details",
  "Job Details",
  "Financial Details",
];

const UserProfile = () => {
  const [activeMenu, setActiveMenu] = useState("Personal Details");

  const renderContent = () => {
    switch (activeMenu) {
      case "Personal Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Personal Details</h2>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <PencilIcon className="h-5 w-5" />
                <span>Edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-yellow-400 rounded-full p-6">
                <img
                  src={profileImg}
                  alt="Profile Avatar"
                  className="h-36 w-36 rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">John Doe Francis</p>
                <p className="text-sm text-gray-600">Employee Name</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Design & Marketing</p>
                <p className="text-sm text-gray-600">Department</p>
              </div>
              <div className="flex justify-between w-full max-w-md mt-4">
                <div>
                  <p className="font-semibold text-lg">UI / UX Designer</p>
                  <p className="text-sm text-gray-600">Job Title</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Full time</p>
                  <p className="text-sm text-gray-600">Job Category</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Contact Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Contact Details</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-4xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number 1
                </label>
                <input
                  type="text"
                  defaultValue="Phone Number 1"
                  className="w-full bg-blue-100 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number 2
                </label>
                <input
                  type="text"
                  defaultValue="Phone Number 2"
                  className="w-full bg-blue-100 rounded-md p-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail Address
                </label>
                <input
                  type="email"
                  defaultValue="johndoe@gmail.com"
                  className="w-full bg-blue-100 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State of residence
                </label>
                <input
                  type="text"
                  defaultValue="Phone Number 1"
                  className="w-full bg-blue-100 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="Phone Number 2"
                  className="w-full bg-blue-100 rounded-md p-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Residential Address
                </label>
                <textarea
                  value="18 Junction site Lekki"
                  className="w-full bg-blue-100 rounded-md p-2"
                  rows={3}
                  readOnly
                />
              </div>
              <div className="col-span-2">
                <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700">
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      case "Next of kin Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Next of kin Details</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              <p>
                This section is under construction. Please check back later.
              </p>
            </div>
          </div>
        );
      case "Education Qualifications":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Education Qualifications</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              <p>
                This section is under construction. Please check back later.
              </p>
            </div>
          </div>
        );
      case "Guarantor Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Guarantor Details</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              <p>
                This section is under construction. Please check back later.
              </p>
            </div>
          </div>
        );
      case "Family Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Family Details</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              <p>
                This section is under construction. Please check back later.
              </p>
            </div>
          </div>
        );
      case "Job Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Job Details</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              <p>
                This section is under construction. Please check back later.
              </p>
            </div>
          </div>
        );
      case "Financial Details":
        return (
          <div className="bg-white p-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Financial Details</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              <p>
                This section is under construction. Please check back later.
              </p>
            </div>
          </div>
        );
      default:
        return <div>Select a menu item to view details.</div>;
    }
  };

  return (
    <DashboardLayout
      role="user"
      title="Update Profile"
      userName="John Smith"
      userEmail="user@workbridge.com"
    >
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow flex p-6">
        {/* Left menu */}
        <div className="w-1/4 bg-blue-100 p-4 rounded-l-lg space-y-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`w-full text-left px-4 py-2 rounded cursor-pointer ${
                activeMenu === item
                  ? "bg-yellow-400 text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right content */}
        <div className="w-3/4 p-6">{renderContent()}</div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
