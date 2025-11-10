import React from 'react';
import styled from 'styled-components'; // Import styled

// --- Create our styled components ---

// Notice the (props) => ... This is a function!
// It's receiving the component's props.
const ActivityItem = styled.li`
  padding: 20px 15px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1rem;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  
  /* HERE IS THE DYNAMIC STYLE:
    If the 'priority' prop is true, it changes the background and border!
  */
  background-color: ${props => (props.priority ? '#fff0f0' : 'transparent')};
  border-left: ${props => (props.priority ? '4px solid #d9534f' : '4px solid transparent')};
  padding-left: ${props => (props.priority ? '11px' : '15px')}; /* 15px - 4px border */
  color: ${props => (props.priority ? '#333' : '#666')};
  font-weight: ${props => (props.priority ? '500' : '400')};

  &:hover {
    background-color: ${props => (props.priority ? '#ffe8e8' : '#f9f9f9')};
    transform: translateX(5px);
    cursor: pointer;
  }

  strong {
    color: #007bff;
    font-weight: 600;
  }
`;

const ActivityListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// --- Your component logic ---
const ActivityList = ({ activities }) => {
  return (
    <ActivityListContainer>
      {activities.map(activity => (
        // Here we pass the *entire* activity object as props
        // But we can also be specific
        <ActivityItem key={activity.id} priority={activity.priority}>
          <strong>{activity.action}</strong> {activity.details}
        </ActivityItem>
      ))}
    </ActivityListContainer>
  );
};

export default ActivityList;