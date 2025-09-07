// src/components/ToItem.jsx
import PropTypes from "prop-types";

function ToItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        onClick={() => {
          if (confirm("¿Estás seguro de eliminar esta tarea?")) {
            deleteTask(task.id);
          }
        }}
      >
        Eliminar
      </button>
    </li>
  );
}

ToItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ToItem;
