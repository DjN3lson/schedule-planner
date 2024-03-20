import React from "react";
import TaskForm from './TaskForm';

function DayPlanner({tasks, setTasks}){
    return (
        <div className="day-planner">
            <h2>Daily Planner</h2>
            {/* Render tasks here */}
            <TaskForm tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default DayPlanner;