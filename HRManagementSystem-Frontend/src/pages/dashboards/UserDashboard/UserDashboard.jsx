import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import ProfileImg from "../../../assets/Image/ProfileImg.png";

import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  UserCircleIcon,
} from "../../../components/ui/Icons";

const InfoCard = ({ title, children, actionText, onAction }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {actionText && (
          <button
            onClick={onAction}
            className="text-sm font-semibold text-green-600 hover:underline"
          >
            {actionText}
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleRequestLeave = () => {
    navigate("/user/leave-application");
  };

  const handleProfileClick = () => {
    navigate("/user/profile");
  };

  return (
    <DashboardLayout
      role="user"
      title="My Dashboard"
      userName="Aftab Alam"
      userEmail="user@workbridge.com"
    >
      <div className="p-8">
        <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome back, Aftab Alam!
            </h2>
          <p className="text-gray-600">
            Here’s a summary of your portal and company updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: My Profile and Team */}
          <div className="lg:col-span-1 space-y-8">
            <InfoCard
              title="My Profile"
              actionText="Edit Profile"
              onAction={handleProfileClick}
            >
                <button
                  onClick={handleProfileClick}
                  className="w-full flex items-center space-x-4 cursor-pointer select-none bg-transparent border-none p-0"
                  type="button"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleProfileClick();
                    }
                  }}
                >
                  <img src={ProfileImg} alt="Profile" className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-lg">Aftab Alam</p>
                    <p className="text-gray-600">Java Fullstack Devloper</p>
                    <p className="text-sm text-gray-500">john.s@example.com</p>
                  </div>
                </button>
            </InfoCard>

            {/* RECOMMENDED: My Team / Directory */}
            <InfoCard title="My Team">
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-semibold text-sm">Zakir Hussain</p>
                    <p className="text-xs text-gray-500">HR Manager</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-semibold text-sm">Ankul Sharma</p>
                    <p className="text-xs text-gray-500">Senior Engineer</p>
                  </div>
                </li>
              </ul>
            </InfoCard>
          </div>

          {/* Center Column: Leave and Actions */}
          <div className="lg:col-span-1 space-y-8">
            <InfoCard title="Leave Balance" actionText="View History">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-green-700">12</p>
                  <p className="text-sm font-medium text-gray-600">
                    Paid Time Off
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-700">3</p>
                  <p className="text-sm font-medium text-gray-600">Sick Days</p>
                </div>
              </div>
            </InfoCard>
            <InfoCard title="Quick Actions">
              <div className="space-y-3">
                <button
                  onClick={handleRequestLeave}
                  className="w-full flex items-center justify-center p-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                >
                  <CalendarDaysIcon className="h-5 w-5 mr-2" /> Request Leave
                </button>
                <button className="w-full flex items-center justify-center p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                  <DocumentTextIcon className="h-5 w-5 mr-2" /> Submit Expense
                </button>
              </div>
            </InfoCard>
          </div>

          {/* Right Column: Announcements and Payslips */}
          <div className="lg:col-span-1 space-y-8">
            {/* RECOMMENDED: Company Announcements */}
            <InfoCard title="Company Announcements">
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-sm text-blue-800">
                    Q4 All-Hands Meeting
                  </p>
                  <p className="text-xs text-gray-600">
                    Scheduled for Oct 25. Check your calendar for the invite.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-sm text-purple-800">
                    New Healthcare Portal
                  </p>
                  <p className="text-xs text-gray-600">
                    Please enroll for benefits by the end of the month.
                  </p>
                </div>
              </div>
            </InfoCard>
            <InfoCard title="Recent Payslips" actionText="View All">
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 bg-gray-50 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-600 mr-2" />
                    <p className="font-semibold text-sm">
                      Payslip - August 2025
                    </p>
                  </div>
                  <a href="#" className="text-xs font-semibold text-green-600">
                    Download
                  </a>
                </li>
                <li className="flex justify-between items-center p-2 bg-gray-50 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-600 mr-2" />
                    <p className="font-semibold text-sm">Payslip - July 2025</p>
                  </div>
                  <a href="#" className="text-xs font-semibold text-green-600">
                    Download
                  </a>
                </li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;