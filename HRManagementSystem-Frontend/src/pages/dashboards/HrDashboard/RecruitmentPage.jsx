<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import PostJobModal from '../../../components/modals/PostJobModal';
import ApplicantDetailsModal from '../../../components/modals/ApplicantDetailsModal';

const RecruitmentPage = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
    const [isApplicantModalOpen, setIsApplicantModalOpen] = useState(false);
    
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    // --- DATA FETCHING ---
    const fetchData = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('authToken');
            const headers = { 'Authorization': `Bearer ${token}` };
            
            // Fetch jobs and all applicants in parallel for efficiency
            const [jobsRes, appsRes] = await Promise.all([
                axios.get('http://localhost:8080/api/hr/job-postings', { headers }),
                axios.get('http://localhost:8080/api/hr/applicants', { headers })
            ]);
            
            setJobPostings(jobsRes.data);
            setApplicants(appsRes.data);
        } catch (err) {
            toast.error(`Failed to load recruitment data: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // --- ACTION HANDLERS ---
    const handleJobPosted = (newJob) => {
        // Add the new job returned from the backend to the top of the list
        setJobPostings(prev => [newJob, ...prev]);
    };

    const handleSelectJob = (job) => setSelectedJob(job);
    const handleBackToJobs = () => setSelectedJob(null);
    const handleViewApplicant = (applicant) => {
        setSelectedApplicant(applicant);
        setIsApplicantModalOpen(true);
    };

    const handleStageChange = (applicantId, newStage) => {
        const promise = axios.put(`http://localhost:8080/api/hr/applicants/${applicantId}/stage`, { stage: newStage }, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
        });

        toast.promise(promise, {
            loading: 'Updating stage...',
            success: (response) => {
                // Update the applicant's stage in the local state for an instant UI update
                setApplicants(prev => prev.map(app => 
                    app.id === applicantId ? response.data : app
                ));
                return `Applicant stage updated to ${newStage}.`;
            },
            error: (err) => `Error: ${err.response?.data?.message || err.message}`
        });
    };

    const handleInterviewScheduled = (updatedApplicant) => {
        // Update the main applicants list with the new data from the backend
        setApplicants(prev => prev.map(app =>
            app.id === updatedApplicant.id ? updatedApplicant : app
        ));
    };

    // --- UI HELPER FUNCTIONS ---
    const getStageColor = (stage) => {
        const colors = {
            'Screening': 'bg-blue-100 text-blue-800',
            'Interview': 'bg-indigo-100 text-indigo-800',
            'Offer': 'bg-green-100 text-green-800',
            'Rejected': 'bg-red-100 text-red-800',
        };
        return colors[stage] || 'bg-gray-100 text-gray-800';
    };
    
    // Filter applicants based on the currently selected job
    const filteredApplicants = selectedJob 
        ? applicants.filter(app => app.jobPosting && app.jobPosting.id === selectedJob.id) 
        : [];

    return (
        <DashboardLayout role="hr" title="Recruitment" userName="Zakir Hussain" userEmail="zakir.h@workbridge.com">
            <PostJobModal isOpen={isPostJobModalOpen} onClose={() => setIsPostJobModalOpen(false)} onJobPosted={handleJobPosted} />
            <ApplicantDetailsModal 
                isOpen={isApplicantModalOpen} 
                onClose={() => setIsApplicantModalOpen(false)} 
                applicant={selectedApplicant}
                onInterviewScheduled={handleInterviewScheduled}
            />

            <div className="p-8 space-y-8">
                {loading ? (
                    <div className="text-center p-12 text-gray-500">Loading recruitment data...</div>
                ) : !selectedJob ? (
                    // VIEW 1: All Job Postings
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Job Postings</h2>
                                <p className="text-gray-600">Manage open positions and track applicants.</p>
                            </div>
                            <button onClick={() => setIsPostJobModalOpen(true)} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                                + Post New Job
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobPostings.map(job => (
                                <div key={job.id} className="border p-4 rounded-lg flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
                                        <p className="text-sm text-gray-500">{job.department} &bull; {job.location}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-sm font-semibold">{applicants.filter(a => a.jobPosting && a.jobPosting.id === job.id).length} Applicants</span>
                                        <button onClick={() => handleSelectJob(job)} className="text-sm font-semibold text-green-600 hover:underline">View Applicants</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // VIEW 2: Applicants for a Selected Job
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center mb-6">
                            <button onClick={handleBackToJobs} className="mr-4 text-gray-600 hover:text-black p-2 rounded-full hover:bg-gray-100">&larr;</button>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Applicants for {selectedJob.title}</h2>
                                <p className="text-gray-600">Manage the recruitment pipeline for this position.</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left bg-white">
                                <thead className="border-b bg-gray-50">
                                    <tr>
                                        <th className="p-3 font-semibold text-gray-600">Applicant</th>
                                        <th className="p-3 font-semibold text-gray-600">Submitted On</th>
                                        <th className="p-3 font-semibold text-gray-600">Stage</th>
                                        <th className="p-3 font-semibold text-gray-600 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredApplicants.length > 0 ? (
                                        filteredApplicants.map(applicant => (
                                            <tr key={applicant.id} className="border-b hover:bg-gray-50">
                                                <td className="p-3 font-medium">{applicant.name}</td>
                                                <td className="p-3 text-gray-600">{applicant.submitted}</td>
                                                <td className="p-3">
                                                    <select value={applicant.stage} onChange={(e) => handleStageChange(applicant.id, e.target.value)} 
                                                        className={`p-1 rounded text-xs border-0 outline-none cursor-pointer ${getStageColor(applicant.stage)}`}>
                                                        <option>Screening</option>
                                                        <option>Interview</option>
                                                        <option>Offer</option>
                                                        <option>Rejected</option>
                                                    </select>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <button onClick={() => handleViewApplicant(applicant)} className="text-blue-600 hover:underline text-sm">View Application</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="4" className="text-center p-6 text-gray-500">No applicants for this position yet.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
=======
// src/pages/dashboards/HrDashboard/RecruitmentPage.js
import React, { useState } from 'react';
import DashboardLayout from '../../../components/layout/DashboardLayout';
import { jobPostings, jobApplicants } from '../../../components/data/mockHrData';
import PostJobModal from '../../../components/modals/PostJobModal';

const RecruitmentPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <DashboardLayout
            role="hr"
            title="Recruitment"
            userName="Zakir Hussain"
            userEmail="zakir.h@workbridge.com"
        >
            <PostJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="p-8 space-y-8">
                {/* Job Postings Section */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Current Job Postings</h2>
                            <p className="text-gray-600">Manage open positions and track applicants.</p>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            + Post New Job
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobPostings.map(job => (
                            <div key={job.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
                                <p className="text-sm text-gray-500">{job.department} &bull; {job.location}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-sm font-semibold">{job.applicants} Applicants</span>
                                    <a href="#" className="text-sm font-semibold text-green-600 hover:underline">View</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Applicants Section */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Applicants</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left bg-white">
                            <thead className="border-b bg-gray-50">
                                <tr>
                                    <th className="p-3 font-semibold text-gray-600">Applicant Name</th>
                                    <th className="p-3 font-semibold text-gray-600">Applied For</th>
                                    <th className="p-3 font-semibold text-gray-600">Stage</th>
                                    <th className="p-3 font-semibold text-gray-600">Submitted On</th>
                                    <th className="p-3 font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobApplicants.map(applicant => (
                                    <tr key={applicant.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3 font-medium text-gray-800">{applicant.name}</td>
                                        <td className="p-3 text-gray-700">{applicant.appliedFor}</td>
                                        <td className="p-3 text-gray-700">{applicant.stage}</td>
                                        <td className="p-3 text-gray-700">{applicant.submitted}</td>
                                        <td className="p-3">
                                            <a href="#" className="text-blue-600 hover:underline text-sm">View Application</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a
            </div>
        </DashboardLayout>
    );
};
<<<<<<< HEAD
=======

>>>>>>> 4936037c382d45c4279251d0c85fb69c633de12a
export default RecruitmentPage;