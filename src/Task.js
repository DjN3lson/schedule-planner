import React from "react";

function Task({ task }) {
    const priorityColor = () => {
        switch (task.priority) {
            case "red":
                return "red";
            case "orange":
                return "orange";
            case "yellow":
                return "yellow";
            case "green":
                return "green";
            default:
                return "black";
        }
    };
    return (
        <div className="task" style={{ backgroundColor: priorityColor() }}>
            <p>Name: {task.name}</p>
            <p>Finished Date: {task.finishedDate}</p>
            <p>PriorityL {task.priority}</p>
        </div>
    );
}

export default Task;