import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", finishedDate: "2024-03-20", priority: "red" },
    { id: 2, name: "Task 2", finishedDate: "2024-03-21", priority: "orange" },
    { id: 3, name: "Task 3", finishedDate: "2024-03-22", priority: "yellow" },
    { id: 4, name: "Task 4", finishedDate: "2024-03-23", priority: "green" },
  ]);

  return (
    <div className="App">
      <h1>Schedule Planner</h1>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
