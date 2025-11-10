import React from 'react';

function About() {
  return (
    // Add this class for the "About" page specific styles
    <div className="about-page-container">
      <header>
        <h1>About the Task Manager</h1>
      </header>
      <main>
        <p>
          This application is a high-performance, single-page "Task Manager" (To-Do List) built with React.
        </p>
        <p>
          The <strong>Home</strong> page provides a full-featured interface for managing your daily tasks. Below is a detailed breakdown of its features.
        </p>

        <h3>Core Task Features:</h3>
        <ul>
          <li>
            <strong>Add Tasks:</strong> Use the text input field and "Add Task" button to quickly add new items to your list. The input field clears automatically for rapid entry.
          </li>
          <li>
            <strong>Delete Tasks:</strong> Each task has a dedicated "Delete" button to permanently remove it from the list.
          </li>
          <li>
            <strong>Complete Tasks:</strong> You can click the "Complete" button (or the task text itself) to toggle its status. Completed tasks are visually marked with a line-through and a different style.
          </li>
          <li>
            <strong>Undo Completion:</strong> If you complete a task by accident, simply click "Undo" to mark it as incomplete again.
          </li>
        </ul>
        
        <h3>Technical Details:</h3>
        <ul>
          <li>
            <strong>State Management:</strong> All tasks are managed in real-time using React's `useState` hook for a fast, responsive experience.
          </li>
          <li>
            <strong>Component-Based:</strong> The app is built from reusable components (`TaskForm`, `TaskList`, `TaskItem`) for clean and maintainable code.
          </li>
          <li>
            <strong>React Router:</strong> The navigation between this "About" page and the "Home" page is handled by `react-router-dom`, ensuring a seamless experience without page reloads.
          </li>
        </ul>
      </main>
    </div>
  );
}

export default About;