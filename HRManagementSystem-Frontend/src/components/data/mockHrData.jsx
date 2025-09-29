<<<<<<< HEAD
export const employees = [
    { id: 101, fullName: 'Alice Johnson', email: 'alice.j@example.com', jobTitle: 'Lead Designer', department: 'Design', status: 'Active', role: 'USER' },
    { id: 102, fullName: 'Bob Williams', email: 'bob.w@example.com', jobTitle: 'Senior Backend Engineer', department: 'Engineering', status: 'Active', role: 'USER' },
    { id: 103, fullName: 'Charlie Brown', email: 'charlie.b@example.com', jobTitle: 'Marketing Specialist', department: 'Marketing', status: 'On Leave', role: 'USER' },
    { id: 104, fullName: 'Diana Prince', email: 'diana.p@example.com', jobTitle: 'Product Manager', department: 'Product', status: 'Active', role: 'USER' },
];

export const leaveRequests = [
    { id: 1, employeeName: 'Alice Johnson', leaveType: 'Vacation', startDate: '2025-10-20', endDate: '2025-10-22', days: 3, status: 'Pending' },
    { id: 2, employeeName: 'Charlie Brown', leaveType: 'Sick Leave', startDate: '2025-09-15', endDate: '2025-09-15', days: 1, status: 'Approved' },
    { id: 3, employeeName: 'Bob Williams', leaveType: 'Personal', startDate: '2025-11-01', endDate: '2025-11-01', days: 1, status: 'Pending' },
    { id: 4, employeeName: 'Diana Prince', leaveType: 'Vacation', startDate: '2025-09-28', endDate: '2025-09-28', days: 1, status: 'Denied' },
];

export const payrollRecords = [
    { 
        id: 1, 
        employeeName: 'Alice Johnson', 
        employeeId: 'EMP101',
        payPeriod: 'September 2025', 
        grossPay: 60000, 
        deductions: 12500, 
        netPay: 47500, 
        status: 'Pending', 
        payDate: null,
        details: {
            earnings: [
                { item: 'Basic Salary', amount: 36000 },
                { item: 'House Rent Allowance (HRA)', amount: 18000 },
                { item: 'Special Allowance', amount: 6000 },
            ],
            deductions: [
                { item: 'Provident Fund (PF)', amount: 4320 },
                { item: 'Professional Tax', amount: 200 },
                { item: 'Income Tax (TDS)', amount: 7980 },
            ]
        }
    },
    { 
        id: 2, 
        employeeName: 'Bob Williams', 
        employeeId: 'EMP102',
        payPeriod: 'September 2025', 
        grossPay: 75000, 
        deductions: 18000, 
        netPay: 57000, 
        status: 'Pending', 
        payDate: null,
        details: {
            earnings: [
                { item: 'Basic Salary', amount: 45000 },
                { item: 'House Rent Allowance (HRA)', amount: 22500 },
                { item: 'Special Allowance', amount: 7500 },
            ],
            deductions: [
                { item: 'Provident Fund (PF)', amount: 5400 },
                { item: 'Professional Tax', amount: 200 },
                { item: 'Income Tax (TDS)', amount: 12400 },
            ]
        }
    },
    { 
        id: 3, 
        employeeName: 'Diana Prince', 
        employeeId: 'EMP104',
        payPeriod: 'September 2025', 
        grossPay: 68000, 
        deductions: 15500, 
        netPay: 52500, 
        status: 'Paid', 
        payDate: '2025-09-15',
        details: {
            earnings: [
                { item: 'Basic Salary', amount: 40800 },
                { item: 'House Rent Allowance (HRA)', amount: 20400 },
                { item: 'Special Allowance', amount: 6800 },
            ],
            deductions: [
                { item: 'Provident Fund (PF)', amount: 4896 },
                { item: 'Professional Tax', amount: 200 },
                { item: 'Income Tax (TDS)', amount: 10404 },
            ]
        }
    }
];

export const jobPostings = [
    { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', location: 'Remote', applicants: 12 },
    { id: 2, title: 'UI/UX Designer', department: 'Design', location: 'New York, NY', applicants: 25 },
    { id: 3, title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', applicants: 7 },
];

export const jobApplicants = [
    { id: 1, name: 'Eve Adams', appliedFor: 'Senior Frontend Developer', stage: 'Interview', submitted: '2025-09-20' },
    { id: 2, name: 'Frank Miller', appliedFor: 'UI/UX Designer', stage: 'Screening', submitted: '2025-09-18' },
    { id: 3, name: 'Grace Hopper', appliedFor: 'Senior Frontend Developer', stage: 'Offer', submitted: '2025-09-12' },
=======
// src/components/data/mockHrData.js

export const employees = [
  { id: 1, name: 'Aftab Alam', email: 'aftab.a@workbridge.com', jobTitle: 'Java Fullstack Developer', department: 'Engineering', status: 'Active' },
  { id: 2, name: 'Md Zakir Hussain', email: 'zakir.h@workbridge.com', jobTitle: 'Project Manager', department: 'Management', status: 'Active' },
  { id: 3, name: 'Ankul Singh', email: 'ankul.s@workbridge.com', jobTitle: 'UI/UX Designer', department: 'Design', status: 'On Leave' },
  { id: 4, name: 'Drakshayini', email: 'drakshayini@workbridge.com', jobTitle: 'QA Engineer', department: 'Engineering', status: 'Active' },
  { id: 5, name: 'Abdul Rahman Haider', email: 'abdul.h@workbridge.com', jobTitle: 'DevOps Engineer', department: 'IT', status: 'Active' },
  { id: 6, name: 'Obaidullah', email: 'obaidullah@workbridge.com', jobTitle: 'Frontend Developer', department: 'Engineering', status: 'Active' },
  { id: 7, name: 'Alice Johnson', email: 'alice.j@workbridge.com', jobTitle: 'Data Scientist', department: 'Analytics', status: 'Active' },
  { id: 8, name: 'Bob Williams', email: 'bob.w@workbridge.com', jobTitle: 'Marketing Specialist', department: 'Marketing', status: 'Active' },
];

export const leaveRequests = [
  { id: 1, employeeName: 'Ankul Singh', leaveType: 'Vacation', startDate: '2025-09-20', endDate: '2025-09-25', days: 5, reason: 'Family trip.', status: 'Pending' },
  { id: 2, employeeName: 'Aftab Alam', leaveType: 'Sick Leave', startDate: '2025-09-15', endDate: '2025-09-15', days: 1, reason: 'Feeling unwell.', status: 'Pending' },
  { id: 3, employeeName: 'Drakshayini', leaveType: 'Personal', startDate: '2025-10-01', endDate: '2025-10-02', days: 2, reason: 'Appointment.', status: 'Approved' },
  { id: 4, employeeName: 'Obaidullah', leaveType: 'Vacation', startDate: '2025-09-22', endDate: '2025-09-23', days: 2, reason: 'Short break.', status: 'Pending' },
  { id: 5, employeeName: 'Jane Doe', leaveType: 'Sick Leave', startDate: '2025-08-10', endDate: '2025-08-11', days: 2, reason: 'Cold.', status: 'Approved' },
];

export const jobApplicants = [
    { id: 1, name: 'Charlie Brown', appliedFor: 'Senior Frontend Developer', stage: 'Interview', submitted: '2025-09-10' },
    { id: 2, name: 'Diana Prince', appliedFor: 'Senior Frontend Developer', stage: 'Screening', submitted: '2025-09-12' },
    { id: 3, name: 'Eve Adams', appliedFor: 'UI/UX Designer', stage: 'Applied', submitted: '2025-09-14' },
    { id: 4, name: 'Frank Miller', appliedFor: 'Project Manager', stage: 'Offer', submitted: '2025-09-05' },
];

export const jobPostings = [
    { id: 1, title: 'Senior Frontend Developer', department: 'Engineering', location: 'Remote', type: 'Full-time', applicants: 12 },
    { id: 2, title: 'UI/UX Designer', department: 'Design', location: 'New York, NY', type: 'Full-time', applicants: 8 },
    { id: 3, title: 'Project Manager', department: 'Management', location: 'Remote', type: 'Contract', applicants: 25 },
];

// src/components/data/mockHrData.js

// ... (keep the existing employees, leaveRequests, jobApplicants, jobPostings exports)

export const payrollRecords = [
  // --- September 2025 (Current Period - Pending/Processing) ---
  { id: 1, employeeId: 1, employeeName: 'Aftab Alam', payPeriod: 'September 2025', grossPay: 6000, deductions: 1200, netPay: 4800, status: 'Pending', payDate: null },
  { id: 2, employeeId: 2, employeeName: 'Md Zakir Hussain', payPeriod: 'September 2025', grossPay: 7500, deductions: 1500, netPay: 6000, status: 'Pending', payDate: null },
  { id: 3, employeeId: 4, employeeName: 'Drakshayini', payPeriod: 'September 2025', grossPay: 5000, deductions: 1000, netPay: 4000, status: 'Pending', payDate: null },
  { id: 4, employeeId: 5, employeeName: 'Abdul Rahman Haider', payPeriod: 'September 2025', grossPay: 6200, deductions: 1240, netPay: 4960, status: 'Processing', payDate: null },
  { id: 5, employeeId: 6, employeeName: 'Obaidullah', payPeriod: 'September 2025', grossPay: 5800, deductions: 1160, netPay: 4640, status: 'Pending', payDate: null },
  { id: 6, employeeId: 7, employeeName: 'Alice Johnson', payPeriod: 'September 2025', grossPay: 6500, deductions: 1300, netPay: 5200, status: 'Pending', payDate: null },
  // NOTE: Ankul Singh is 'On Leave' and is not in the current payroll run.

  // --- August 2025 (Previous Period - Paid) ---
  { id: 7, employeeId: 1, employeeName: 'Aftab Alam', payPeriod: 'August 2025', grossPay: 6000, deductions: 1200, netPay: 4800, status: 'Paid', payDate: '2025-08-31' },
  { id: 8, employeeId: 2, employeeName: 'Md Zakir Hussain', payPeriod: 'August 2025', grossPay: 7500, deductions: 1500, netPay: 6000, status: 'Paid', payDate: '2025-08-31' },
  { id: 9, employeeId: 3, employeeName: 'Ankul Singh', payPeriod: 'August 2025', grossPay: 5500, deductions: 1100, netPay: 4400, status: 'Paid', payDate: '2025-08-31' },
  { id: 10, employeeId: 4, employeeName: 'Drakshayini', payPeriod: 'August 2025', grossPay: 5000, deductions: 1000, netPay: 4000, status: 'Paid', payDate: '2025-08-31' },
  { id: 11, employeeId: 5, employeeName: 'Abdul Rahman Haider', payPeriod: 'August 2025', grossPay: 6200, deductions: 1240, netPay: 4960, status: 'Paid', payDate: '2025-08-31' },
>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a
];