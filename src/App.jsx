// src/TodoApp.jsx
import React, { useState, useEffect } from "react";
import ToForm from "./components/ToForm";
import ToList from "./components/ToList";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const totaltask=tasks.length;
  const CompletedTaks=tasks.filter(task=>task.completed).length;
  const pendingTaks=totaltask-CompletedTaks;

  return (
    <div className="todo-container">
      <h1>Mis Tareas</h1>
      <p>total: {totaltask}</p>
      <p>completadas: {CompletedTaks}</p>
      <p>pendientes: {pendingTaks}</p>

      <ToForm onAdd={addTask} />

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
      </div>

      <ToList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
}

export default TodoApp;
