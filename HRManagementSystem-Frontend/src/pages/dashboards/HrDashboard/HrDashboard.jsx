import React, { useState } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { UsersIcon, BriefcaseIcon, CurrencyDollarIcon, CalendarDaysIcon } from '../../../components/ui/Icons';
import CreateUserModal from '../../../components/modals/CreateUserModal';

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 rounded-lg shadow">
        <div className={`text-3xl ${color} mb-2`}>{icon}</div>
        <h3 className="text-gray-500 text-sm font-medium uppercase">{title}</h3>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
);

const HrDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <DashboardLayout
            role="hr"
            title="HR Dashboard"
            userName="Jane Doe"
            userEmail="hr@workbridge.com"
        >
            <CreateUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="p-8">
                {/* Stat Cards from previous design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Employees" value="245" icon={<UsersIcon className="h-8 w-8" />} color="text-blue-500" />
                    <StatCard title="New Applicants" value="18" icon={<BriefcaseIcon className="h-8 w-8" />} color="text-green-500" />
                    <StatCard title="Leave Requests" value="7" icon={<CalendarDaysIcon className="h-8 w-8" />} color="text-yellow-500" />
                    <StatCard title="Payroll Pending" value="\$250k" icon={<CurrencyDollarIcon className="h-8 w-8" />} color="text-red-500" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* RECOMMENDED: Actionable Leave Request Section */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Pending Leave Requests</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-semibold">Alice Johnson <span className="text-sm text-gray-500 ml-2"> (Vacation: 3 days)</span></p>
                                    <p className="text-sm text-gray-500">Dates: Sep 15 - Sep 17, 2025</p>
                                </div>
                                <div className="space-x-2">
                                    <button className="text-sm bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-md hover:bg-green-200">Approve</button>
                                    <button className="text-sm bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-md hover:bg-red-200">Deny</button>
                                </div>
                            </div>
                            {/* ... more requests */}
                        </div>
                    </div>

                    {/* Quick Actions & Recruitment */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
                            <ul className="space-y-3">
                                <li>
                                    <button onClick={() => setIsModalOpen(true)} className="block w-full text-left bg-green-100 text-green-800 p-3 rounded-lg hover:bg-green-200 font-semibold">+ Create New User Account</button>
                                </li>
                                <li><a href="#" className="block w-full text-left bg-blue-100 text-blue-800 p-3 rounded-lg hover:bg-blue-200 font-semibold">Post a New Job</a></li>
                                <li><a href="#" className="block w-full text-left bg-yellow-100 text-yellow-800 p-3 rounded-lg hover:bg-yellow-200 font-semibold">Run Payroll</a></li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                             <h3 className="text-xl font-semibold text-gray-800 mb-4">Recruitment Pipeline</h3>
                              <p className="text-sm text-gray-500 mb-2">Senior Frontend Developer</p>
                              <div className="space-y-2 text-sm">
                                <p><strong>Applied:</strong> 12</p>
                                <p><strong>Interviewing:</strong> 4</p>
                                <p><strong>Offer:</strong> 1</p>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HrDashboard;