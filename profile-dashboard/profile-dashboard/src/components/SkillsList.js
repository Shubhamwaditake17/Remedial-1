import React from 'react';
// 1. Import 'styled' from the library
import styled from 'styled-components';

// 2. We create new components using the 'styled' tag.
// We are moving the styles from Dashboard.css directly into this file.

const SkillsListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; 
  gap: 12px;
`;

const SkillTag = styled.li`
  background-color: rgba(0, 123, 255, 0.1);
  color: #0056b3; /* Darker blue text */
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;

  /* We can even define the :hover state right here! */
  &:hover {
    background-color: #007bff;
    color: #ffffff;
    transform: translateY(-2px);
    cursor: default;
  }
`;

// 3. Your component logic STAYS THE SAME.
const SkillsList = ({ skills }) => {
  return (
    // 4. Instead of <ul className="..."> we use our new styled component.
    <SkillsListContainer>
      {skills.map((skill, index) => (
        // 5. And here, we use <SkillTag> instead of <li className="...">
        <SkillTag key={index}>
          {skill}
        </SkillTag>
      ))}
    </SkillsListContainer>
  );
};

export default SkillsList;