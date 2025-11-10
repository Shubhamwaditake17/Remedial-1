import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submit
    if (inputText.trim() === '') return; // Don't add empty tasks

    addTask(inputText);
    setInputText(''); // Clear the input field after adding
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;