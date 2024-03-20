import React from "react";
import TaskForm from './TaskForm';

function WeekPlanner({tasks, setTasks}){
    return (
        <div className="week-planner">
            <h2>Week Planner</h2>
            {/* Render weekly view and tasks here */}
            <TaskForm tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default WeekPlanner;