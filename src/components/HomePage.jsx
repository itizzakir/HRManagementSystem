import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-bold">HR Management</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">
            Dashboard
          </a>
          <a href="#" className="hover:underline">
            Employees
          </a>
          <a href="#" className="hover:underline">
            Departments
          </a>
          <a href="#" className="hover:underline">
            Attendance
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 flex-grow">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to HR Management System
        </h2>
        <p className="text-gray-600 mb-6">
          Manage employees, track attendance, and handle departments
          efficiently.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg">
          Get Started
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white">
        <div className="shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="text-blue-600 text-2xl">👥</div>
          <div>
            <h3 className="text-xl font-semibold">150+</h3>
            <p className="text-gray-500">Employees</p>
          </div>
        </div>

        <div className="shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="text-green-600 text-2xl">🏢</div>
          <div>
            <h3 className="text-xl font-semibold">10</h3>
            <p className="text-gray-500">Departments</p>
          </div>
        </div>

        <div className="shadow-lg rounded-2xl p-6 flex items-center gap-4">
          <div className="text-orange-600 text-2xl">📅</div>
          <div>
            <h3 className="text-xl font-semibold">95%</h3>
            <p className="text-gray-500">Attendance Rate</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} HR Management System. All rights reserved.
      </footer>
    </div>
  );
}
