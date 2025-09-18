import React from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const Payslips = () => {
  const payslips = [
    { id: 1, month: "August 2025", amount: "$5000", status: "Paid" },
    { id: 2, month: "July 2025", amount: "$4800", status: "Paid" },
    { id: 3, month: "June 2025", amount: "$4700", status: "Paid" },
  ];

  return (
    <DashboardLayout
      role="user"
      title="Payslips"
      userName="Aftab Alam"
      userEmail="user@workbridge.com"
    >
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Payslips</h1>
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b border-gray-300">
                Month
              </th>
              <th className="text-left px-4 py-2 border-b border-gray-300">
                Amount
              </th>
              <th className="text-left px-4 py-2 border-b border-gray-300">
                Status
              </th>
              <th className="text-left px-4 py-2 border-b border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {payslips.map((payslip) => (
              <tr key={payslip.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-300">
                  {payslip.month}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {payslip.amount}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {payslip.status}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Payslips;