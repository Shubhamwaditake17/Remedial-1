import React from 'react';
import ActivityList from './ActivityList';
import SkillsList from './SkillsList'; // <-- 1. Import the new component

// This component receives 'user', 'activities', and 'skills' as props
const UserProfile = ({ user, activities, skills }) => { // <-- 2. Receive 'skills' prop
  return (
    <div className="profile-dashboard">
      <header className="profile-header">
        <img 
          src={user.profilePicture} 
          alt={`${user.name}'s profile`} 
          className="profile-pic"
        />
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </header>
      
      {/* --- 3. Add the new skills section --- */}
      <section className="skills-section">
        <h3>Core Skills</h3>
        <SkillsList skills={skills} />
      </section>
      {/* --- End new section --- */}
      
      <section className="activity-feed">
        <h3>Recent Activity</h3>
        <ActivityList activities={activities} />
      </section>
    </div>
  );
};

export default UserProfile;