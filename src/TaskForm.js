import React, {useState} from "react";

function TaskForm ({tasks, setTasks}){
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!taskName.trim()) return;
        setTasks([...tasks, {id: Date.now(), name: taskName}]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit"> Add task</button>
        </form>
    );
}

export default TaskForm;