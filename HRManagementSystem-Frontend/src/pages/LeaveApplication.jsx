import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { CalendarDaysIcon } from '../components/ui/Icons';

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    leaveType: 'Annual Leave',
    startDate: '',
    endDate: '',
    duration: 0,
    resumptionDate: '',
    reason: '',
    handoverDocument: null,
    reliefOfficer: '',
  });

  const reliefOfficers = [
    { id: '1', name: 'Jane Doe' },
    { id: '2', name: 'Bob Williams' },
    { id: '3', name: 'Alice Johnson' },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'number') {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      leaveType: 'Annual Leave',
      startDate: '',
      endDate: '',
      duration: 0,
      resumptionDate: '',
      reason: '',
      handoverDocument: null,
      reliefOfficer: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just alert the form data except file
    alert('Leave request submitted: ' + JSON.stringify({
      ...formData,
      handoverDocument: formData.handoverDocument ? formData.handoverDocument.name : null,
    }));
    // In real app, submit to backend API
  };

  return (
    <DashboardLayout role="user" title="Leave Application" userName="John Smith" userEmail="user@workbridge.com">
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow">
        <div className="flex items-center mb-2">
          <CalendarDaysIcon className="h-8 w-6 text-black-800 mr-2" />
          <h1 className="text-2xl font-bold">Leave Application</h1>
        </div>
        <p className="mb-1 text-gray-800">Fill the required fields below to apply for annual leave.</p>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div>
            <label htmlFor="leaveType" className="block font-semibold mb-1">Leave Type</label>
            <select
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded px-3 py-2"
            >
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="startDate" className="block font-semibold mb-1">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block font-semibold mb-1">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="duration" className="block font-semibold mb-1">Duration</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                min="0"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="resumptionDate" className="block font-semibold mb-1">Resumption Date</label>
              <input
                type="date"
                id="resumptionDate"
                name="resumptionDate"
                value={formData.resumptionDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block font-semibold mb-0">Reason for leave</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded px-1 py-0"
              required
            />
          </div>

          <div>
            <label htmlFor="handoverDocument" className="block font-semibold mb-1">
              Attach handover document (pdf, jpg, docx or any other format)
            </label>
            <input
              type="file"
              id="handoverDocument"
              name="handoverDocument"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.docx,.doc,.png"
              className="block w-full text-sm text-gray-600"
            />
          </div>

          <div>
            <label htmlFor="reliefOfficer" className="block font-semibold mb-1">Choose Relief Officer</label>
            <select
              id="reliefOfficer"
              name="reliefOfficer"
              value={formData.reliefOfficer}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="" disabled>Select your relief officer</option>
              {reliefOfficers.map((officer) => (
                <option key={officer.id} value={officer.name}>{officer.name}</option>
              ))}
            </select>
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-green-700 text-white font-bold py-2 px-6 rounded hover:bg-green-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="border border-red-500 text-red-500 font-bold py-2 px-6 rounded hover:bg-red-100"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default LeaveApplication;
