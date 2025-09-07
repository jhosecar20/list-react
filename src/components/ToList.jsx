// src/components/ToList.jsx
import React from "react";
import ToItem from "./ToItem";

function ToList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToItem
          key={task.id}
          task={task}
          toggleTask={onToggle}
          deleteTask={onDelete}
        />
      ))}
    </ul>
  );
}

export default ToList;
