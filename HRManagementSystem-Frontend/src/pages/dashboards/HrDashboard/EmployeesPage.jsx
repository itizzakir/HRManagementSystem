<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import axios from 'axios';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import UserActionModal from '../../../components/modals/UserActionModel'; // CORRECTED: UserActionModal, not Model

const EmployeesPage = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [selectedUserId, setSelectedUserId] = useState(null);

    // --- DATA FETCHING ---
    // (1) Define fetchEmployees outside of useEffect and wrap with useCallback
    // This prevents it from being recreated on every render and avoids dependency array issues.
    const fetchEmployees = useCallback(async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('authToken');
            const response = await axios.get('http://localhost:8080/api/hr/employees', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setEmployees(response.data);
        } catch (err) {
            toast.error(`Failed to fetch employees: ${err.response?.data?.message || err.message}`);
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array means this function is created only once.

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                setCurrentUser(jwtDecode(token));
            } catch (error) {
                console.error("Invalid token:", error);
            }
        }
        // (2) Now we can call the stable fetchEmployees function
        fetchEmployees();
    }, [fetchEmployees]); // Add fetchEmployees to the dependency array

    // --- ACTION HANDLERS ---
    const handleOpenCreateModal = () => {
        setModalMode('create');
        setSelectedUserId(null);
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (userId) => {
        setModalMode('edit');
        setSelectedUserId(userId);
        setIsModalOpen(true);
    };
    
    const handleModalComplete = (result) => {
        if (modalMode === 'create') {
            // (3) This call now works correctly because fetchEmployees is in the component's scope
            fetchEmployees();
        } else {
            setEmployees(prev => prev.map(user => user.id === result.id ? result : user));
        }
    };
    
    // (All other handlers: handleResendInvite, handleDelete, etc. are correct and unchanged)
    const handleResendInvite = (email) => { /* ... */ };
    const handleDelete = (userId, userName) => { /* ... */ };
    const performDelete = (userId) => { /* ... */ };
    const getStatusDisplay = (user) => { /* ... */ };
    const getRoleDisplay = (role) => { /* ... */ };
=======
// src/pages/dashboards/HrDashboard/EmployeesPage.js
import React, { useState } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { employees as initialEmployees } from '../../../components/data/mockHrData';
import CreateUserModal from '../../../components/modals/CreateUserModal';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState(initialEmployees);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'On Leave': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };
>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a

    return (
        <DashboardLayout
            role="hr"
            title="Employee Management"
<<<<<<< HEAD
            userName={currentUser?.fullName || 'HR Manager'}
            userEmail={currentUser?.sub || ''}
        >
            <UserActionModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                mode={modalMode}
                userId={selectedUserId}
                onComplete={handleModalComplete}
            />
=======
            userName="Zakir Hussain"
            userEmail="zakir.h@workbridge.com"
        >
            <CreateUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUserCreated={() => {}} />
>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a

            <div className="p-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">All Employees</h2>
                            <p className="text-gray-600">View, search, and manage all employee records.</p>
                        </div>
<<<<<<< HEAD
                        <button onClick={handleOpenCreateModal} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                            + Onboard Employee
=======
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            + Add Employee
>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left bg-white">
                            <thead className="border-b bg-gray-50">
                                <tr>
<<<<<<< HEAD
                                    <th className="p-3 font-semibold text-gray-600 uppercase">Name</th>
                                    <th className="p-3 font-semibold text-gray-600 uppercase">Job Title</th>
                                    <th className="p-3 font-semibold text-gray-600 uppercase">Role</th>
                                    <th className="p-3 font-semibold text-gray-600 uppercase">Status</th>
                                    <th className="p-3 font-semibold text-gray-600 uppercase text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="5" className="text-center p-6 text-gray-500">Loading employees...</td></tr>
                                ) : employees.length === 0 ? (
                                    <tr><td colSpan="5" className="text-center p-6 text-gray-500">No employees found.</td></tr>
                                ) : (
                                    employees.map(user => (
                                        <tr key={user.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">
                                                <div className="font-medium text-gray-800">{user.fullName}</div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </td>
                                            <td className="p-3 text-gray-700">{user.jobTitle || 'N/A'}</td>
                                            <td className="p-3">{getRoleDisplay(user.role)}</td>
                                            <td className="p-3">{getStatusDisplay(user)}</td>
                                            <td className="p-3 text-right space-x-4">
                                                {user.status === 'PENDING' ? (
                                                    <button onClick={() => handleResendInvite(user.email)} className="text-blue-600 hover:underline text-sm font-semibold">Resend Invite</button>
                                                ) : (
                                                    <>
                                                        <button onClick={() => handleOpenEditModal(user.id)} className="text-blue-600 hover:underline text-sm font-medium">Edit</button>
                                                        <button onClick={() => handleDelete(user.id, user.fullName)} className="text-red-600 hover:underline text-sm font-medium">Delete</button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
=======
                                    <th className="p-3 font-semibold text-gray-600">Name</th>
                                    <th className="p-3 font-semibold text-gray-600">Job Title</th>
                                    <th className="p-3 font-semibold text-gray-600">Department</th>
                                    <th className="p-3 font-semibold text-gray-600">Status</th>
                                    <th className="p-3 font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(user => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">
                                            <div className="font-medium text-gray-800">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </td>
                                        <td className="p-3 text-gray-700">{user.jobTitle}</td>
                                        <td className="p-3 text-gray-700">{user.department}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <button className="text-blue-600 hover:underline text-sm">View Details</button>
                                        </td>
                                    </tr>
                                ))}
>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EmployeesPage;