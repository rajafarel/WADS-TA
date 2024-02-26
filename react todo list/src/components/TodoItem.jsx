import React, { useState } from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    if (newTitle.trim() !== "") {
      editTodo(id, newTitle);
      setEditing(false);
    }
  };

  return (
    <li>
      {editing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
            Delete
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={() => setEditing(true)}>
            Edit
          </button>
        </label>
      )}

    </li>
  );
}
