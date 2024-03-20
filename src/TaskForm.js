import React, { useState } from "react";
import Task from "./Task";

function TaskForm({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState('');
  const [finishedDate, setFinishedDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !finishedDate || !priority) return;
    setTasks([...tasks, { id: Date.now(), name: taskName, finishedDate, priority }]);
    setTaskName('');
    setFinishedDate('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        value={finishedDate}
        onChange={(e) => setFinishedDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select Priority</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
