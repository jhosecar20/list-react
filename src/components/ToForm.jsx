// src/components/ToForm.jsx
import React, { useState } from "react";

function ToForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ToForm;
