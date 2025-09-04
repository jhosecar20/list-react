import { useState } from 'react';
import TodoForm from './components/ToForm';
import TodoList from './components/ToList';
import './App.css';



function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="stats">
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks}</p>
        <p>Pendientes: {pendingTasks}</p>
      </div>

      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;