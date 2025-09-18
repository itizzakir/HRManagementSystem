import React, { useState, useRef } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { CalendarDaysIcon } from "../../../components/ui/Icons";

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    leaveType: "Annual Leave",
    startDate: "",
    endDate: "",
    duration: 0,
    resumptionDate: "",
    reason: "",
    handoverDocument: null,
    reliefOfficer: "",
  });

  const reliefOfficers = [
    { id: "1", name: "Jane Doe" },
    { id: "2", name: "Bob Williams" },
    { id: "3", name: "Alice Johnson" },
  ];

  const leaveBalances = [
    { id: "annual", name: "Annual Leave", balance: 60 },
    { id: "sick", name: "Sick Leave", balance: 20 },
    { id: "maternity", name: "Maternity Leave", balance: 60 },
    { id: "casual", name: "Casual Leave", balance: 30 },
    { id: "paternity", name: "Paternity Leave", balance: 15 },
    { id: "sabbatical", name: "Sabbatical Leave", balance: 10 },
  ];

  const leaveHistory = [
    {
      id: 1,
      name: "Aftab Alam",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: 2,
      name: "Aftab Alam",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Sick",
      reason: "Exam",
    },
    {
      id: 3,
      name: "Aftab Alam",
      duration: 120,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Maternity",
      reason: "Child Care",
    },
    {
      id: 4,
      name: "Aftab Alam",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: 5,
      name: "Aftab Alam",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: 6,
      name: "Aftab Alam",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
  ];

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "number") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      leaveType: "Annual Leave",
      startDate: "",
      endDate: "",
      duration: 0,
      resumptionDate: "",
      reason: "",
      handoverDocument: null,
      reliefOfficer: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Leave request submitted: " +
        JSON.stringify({
          ...formData,
          handoverDocument: formData.handoverDocument
            ? formData.handoverDocument.name
            : null,
        })
    );
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <DashboardLayout
      role="user"
      title="Leave Application"
      userName="Aftab Alam"
      userEmail="user@workbridge.com"
    >
      <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow space-y-8">
        {/* Leave Balances Section */}
        <div>
          <h1 className="flex items-center text-2xl font-bold mb-4">
            <CalendarDaysIcon className="h-8 w-8 text-gray-700 mr-2" />
            Leave Application
          </h1>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {leaveBalances.map((leave) => (
              <div
                key={leave.id}
                className="flex-shrink-0 bg-green-700 text-white rounded-lg px-6 py-4 flex items-center space-x-6 min-w-[180px]"
              >
                <div className="text-3xl font-bold bg-white text-green-700 rounded-full w-12 h-12 flex items-center justify-center">
                  {leave.balance}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{leave.name}</span>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, leaveType: leave.name });
                      scrollToForm();
                    }}
                    className="mt-1 bg-yellow-400 text-black rounded-full px-4 py-1 text-sm font-semibold hover:bg-yellow-500"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave History Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Leave History</h2>
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 flex items-center space-x-2">
              <span>Export</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    Name(s)
                  </th>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    Duration(s)
                  </th>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    Start Date
                  </th>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    End Date
                  </th>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    Type
                  </th>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    Reason(s)
                  </th>
                  <th className="text-left px-4 py-2 border-b border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaveHistory.map((leave) => (
                  <tr key={leave.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b border-gray-300">
                      {leave.name}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {leave.duration}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {leave.startDate}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {leave.endDate}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {leave.type}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {leave.reason}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800">
                        Actions
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leave Application Form */}
        <div
          ref={formRef}
          className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-4">Apply for Leave</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="leaveType" className="block font-semibold mb-1">
                Leave Type
              </label>
              <select
                id="leaveType"
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>Annual Leave</option>
                <option>Sick Leave</option>
                <option>Maternity Leave</option>
                <option>Casual Leave</option>
                <option>Paternity Leave</option>
                <option>Sabbatical Leave</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className="block font-semibold mb-1">
                  Start Date
                </label>
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
                <label htmlFor="endDate" className="block font-semibold mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="duration" className="block font-semibold mb-1">
                  Duration
                </label>
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
                <label
                  htmlFor="resumptionDate"
                  className="block font-semibold mb-1"
                >
                  Resumption Date
                </label>
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
              <label htmlFor="reason" className="block font-semibold mb-1">
                Reason for leave
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="handoverDocument"
                className="block font-semibold mb-1"
              >
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
              <label
                htmlFor="reliefOfficer"
                className="block font-semibold mb-1"
              >
                Choose Relief Officer
              </label>
              <select
                id="reliefOfficer"
                name="reliefOfficer"
                value={formData.reliefOfficer}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="" disabled>
                  Select your relief officer
                </option>
                {reliefOfficers.map((officer) => (
                  <option key={officer.id} value={officer.name}>
                    {officer.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4">
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
      </div>
    </DashboardLayout>
  );
};

export default LeaveApplication;