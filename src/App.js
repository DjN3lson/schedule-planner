import React, { useState } from 'react';
import DayPlanner from './DayPlanner';
import WeekPlanner from './WeekPlanner';

function App() {
  const [tasks, setTasks] = useState ([]);
  return (
    <div className="App">
      <h1>Schedule Planner</h1>
      <DayPlanner tasks={tasks} setTasks={setTasks} />
      <WeekPlanner tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
