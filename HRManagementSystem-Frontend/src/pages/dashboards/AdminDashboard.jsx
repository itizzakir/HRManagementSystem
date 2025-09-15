import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { ChartBarIcon, UsersIcon, ShieldCheckIcon, CogIcon } from '../../components/ui/Icons';
import CreateHrModal from '../../components/modals/CreateHrModal';

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 rounded-lg shadow">
        <div className={`text-3xl ${color} mb-2`}>{icon}</div>
        <h3 className="text-gray-500 text-sm font-medium uppercase">{title}</h3>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
);

const AdminDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Simulated user data for the table
    const users = [
        { id: 1, name: 'Jane Doe', email: 'jane.d@example.com', role: 'HR Manager', status: 'Active' },
        { id: 2, name: 'John Smith', email: 'john.s@example.com', role: 'Employee', status: 'Active' },
        { id: 3, name: 'Sam Wilson', email: 'sam.w@example.com', role: 'Admin', status: 'Locked' },
    ];

    // Simulated audit logs
    const auditLogs = [
        { id: 1, action: 'User Created', timestamp: '2025-09-07 14:30', user: 'Admin' },
        { id: 2, action: 'Login Attempt Failed', timestamp: '2025-09-07 15:45', user: 'Unknown' },
    ];

    const handleEdit = (userId) => {
        alert(`Editing user ${userId} (Simulated)`);
        // In real app: Open edit modal or navigate to edit page
    };

    const handleDelete = (userId) => {
        if (window.confirm(`Delete user ${userId}?`)) {
            alert(`User ${userId} deleted (Simulated)`);
            // In real app: API call to delete
        }
    };

    return (
        <DashboardLayout
            role="admin"
            title="Admin Dashboard"
            userName="System Admin"
            userEmail="admin@workbridge.com"
        >
            <CreateHrModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="p-8">
                {/* Previous Feature: Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Users" value="1,250" icon={<UsersIcon className="h-8 w-8"/>} color="text-blue-500" />
                    <StatCard title="System Uptime" value="99.98%" icon={<ShieldCheckIcon className="h-8 w-8"/>} color="text-green-500" />
                    <StatCard title="API Requests (24h)" value="1.2M" icon={<ChartBarIcon className="h-8 w-8"/>} color="text-yellow-500" />
                    <StatCard title="Pending Approvals" value="3" icon={<CogIcon className="h-8 w-8"/>} color="text-red-500" />
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Previous Feature: User Management (Expanded with Edit/Delete) */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">User Management</h3>
                        <p className="text-gray-600 mb-4">Oversee and manage all user accounts and their roles.</p>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Role</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="p-2">{user.name}</td>
                                        <td className="p-2">{user.email}</td>
                                        <td className="p-2"><span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">{user.role}</span></td>
                                        <td className="p-2 text-green-600">{user.status}</td>
                                        <td className="p-2">
                                            <button onClick={() => handleEdit(user.id)} className="text-blue-600 hover:underline mr-2">Edit</button>
                                            <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 flex space-x-3">
                            <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700">View All Users</button>
                            <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">Create HR Account</button>
                        </div>
                    </div>

                    {/* Previous Feature: System Controls */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">System Controls</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="flex items-center text-green-700 hover:underline"><CogIcon className="h-5 w-5 mr-2"/> Manage System Settings</a></li>
                            {/* Other links... */}
                        </ul>
                    </div>
                </div>

                {/* New Recommended Feature: Audit Logs */}
                <div className="mt-8 bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Audit Logs</h3>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">Action</th>
                                <th className="p-2">Timestamp</th>
                                <th className="p-2">User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auditLogs.map(log => (
                                <tr key={log.id} className="border-b hover:bg-gray-50">
                                    <td className="p-2">{log.action}</td>
                                    <td className="p-2">{log.timestamp}</td>
                                    <td className="p-2">{log.user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="mt-4 bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700">View All Logs</button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;