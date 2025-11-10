import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {/* This span will get the line-through style */}
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>
      
      <div className="task-buttons">
        <button className="complete-btn" onClick={() => toggleTask(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;