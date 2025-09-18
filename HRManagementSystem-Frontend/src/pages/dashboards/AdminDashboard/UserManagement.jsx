import React, { useState } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import CreateUserModal from '../../../components/modals/CreateUserModal'; // Using the user creation modal

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Jane Doe', email: 'jane.d@example.com', role: 'HR Manager', status: 'Active' },
    { id: 2, name: 'John Smith', email: 'john.s@example.com', role: 'Employee', status: 'Active' },
    { id: 3, name: 'Sam Wilson', email: 'sam.w@example.com', role: 'Admin', status: 'Locked' },
    { id: 4, name: 'Emily White', email: 'emily.w@example.com', role: 'Employee', status: 'Inactive' },
  ]);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // For future edit modal

  const handleCreateUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find(u => u.id === userId);
    if (userToEdit) {
      alert(`Simulating edit for user: ${userToEdit.name}. (Would open an edit modal)`);
      setEditingUser(userToEdit); // You'd pass this to an <EditUserModal />
    }
  };

  const handleDelete = (userId) => {
    if (window.confirm(`Are you sure you want to delete user ID ${userId}?`)) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      alert(`User ID ${userId} deleted (Simulated)`);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-yellow-100 text-yellow-800';
      case 'Locked': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout
        role="admin"
        title="User Management"
        userName="System Admin"
        userEmail="admin@workbridge.com"
    >
        <CreateUserModal 
            isOpen={isCreateUserModalOpen} 
            onClose={() => setIsCreateUserModalOpen(false)} 
            onUserCreated={handleCreateUser}
        />

        <div className="p-8">
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">All System Users</h2>
                <p className="text-gray-600 mb-6">
                    Oversee and manage all user accounts, roles, and statuses.
                </p>

                <div className="flex justify-end mb-4">
                    <button 
                        onClick={() => setIsCreateUserModalOpen(true)}
                        className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Create New User
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-left bg-white border-collapse">
                        <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="p-3 font-semibold text-gray-600">ID</th>
                                <th className="p-3 font-semibold text-gray-600">Name</th>
                                <th className="p-3 font-semibold text-gray-600">Email</th>
                                <th className="p-3 font-semibold text-gray-600">Role</th>
                                <th className="p-3 font-semibold text-gray-600">Status</th>
                                <th className="p-3 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 text-gray-700">{user.id}</td>
                                    <td className="p-3 text-gray-700">{user.name}</td>
                                    <td className="p-3 text-gray-700">{user.email}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : user.role === 'HR Manager' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <button onClick={() => handleEdit(user.id)} className="text-blue-600 hover:underline mr-3 text-sm">Edit</button>
                                        <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:underline text-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {users.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">No users found.</p>
                )}
            </div>
        </div>
    </DashboardLayout>
  );
};

export default UserManagementPage;