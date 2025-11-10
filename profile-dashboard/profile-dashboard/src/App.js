import React from 'react';
import UserProfile from './components/UserProfile';
import './components/Dashboard.css';

// --- Your Data from Shubham_Waditake.pdf ---

const userData = {
  name: "Shubham Waditake",
  profilePicture: "https://i.imgur.com/tq9mJ8p.png", // Generic placeholder icon
  bio: "Third year Computer Science (CSF) student with knowledge in software engineering, web development, cyber security, and AI."
};

const activityData = [
  { id: 1, action: "developed 'CyberShield'", details: "a network scanning tool to detect over 1,000 active ports." },
  { id: 2, action: "built an 'Employee Payroll Management System'", details: "using MySQL, reducing manual processing time by 70%." },
  { id: 3, action: "completed 'AICTE Virtual Internship'", details: "developing 'Enhance Communication Privacy through Text Encryption'." },
  { id: 4, action: "implemented", details: "symmetric and asymmetric encryption", priority: true }
];

// Data from your resume
const skillsData = [
  'C', 'C++', 'Java', 'Python', 'MySQL', 'MongoDB', 
  'DSA', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'
];


function App() {
  return (
    <div className="app-container">
      <UserProfile 
        user={userData} 
        activities={activityData} 
        skills={skillsData} 
      />
    </div>
  );
}

export default App;