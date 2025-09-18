// src/pages/dashboards/HrDashboard/LeaveManagementPage.js
import React, { useState } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { leaveRequests as initialRequests } from '../../../components/data/mockHrData';

const LeaveManagementPage = () => {
    const [leaveRequests, setLeaveRequests] = useState(initialRequests);
    
    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Denied': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <DashboardLayout
            role="hr"
            title="Leave Management"
            userName="Zakir Hussain"
            userEmail="zakir.h@workbridge.com"
        >
            <div className="p-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">All Leave Requests</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left bg-white">
                            <thead className="border-b bg-gray-50">
                                <tr>
                                    <th className="p-3 font-semibold text-gray-600">Employee</th>
                                    <th className="p-3 font-semibold text-gray-600">Leave Type</th>
                                    <th className="p-3 font-semibold text-gray-600">Dates</th>
                                    <th className="p-3 font-semibold text-gray-600">Days</th>
                                    <th className="p-3 font-semibold text-gray-600">Status</th>
                                    <th className="p-3 font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaveRequests.map(req => (
                                    <tr key={req.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3 font-medium text-gray-800">{req.employeeName}</td>
                                        <td className="p-3 text-gray-700">{req.leaveType}</td>
                                        <td className="p-3 text-gray-700">{req.startDate} to {req.endDate}</td>
                                        <td className="p-3 text-gray-700">{req.days}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(req.status)}`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            {req.status === 'Pending' && (
                                                <div className="flex space-x-2">
                                                    <button className="text-green-600 hover:underline text-sm">Approve</button>
                                                    <button className="text-red-600 hover:underline text-sm">Deny</button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LeaveManagementPage;