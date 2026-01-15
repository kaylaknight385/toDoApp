import React, { useState } from 'react';
import { useTodos } from '../contexts/TodoContext';

// individual todo item with checkbox, edit, and delete
export function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { toggleTodo, deleteTodo, editTodo } = useTodos();

  const handleEdit = () => {
    // only save if text changed and isn't empty
    if (editText.trim() && editText !== todo.text) {
      editTodo(todo.id, editText);
    } else {
      setEditText(todo.text); // revert if no changes
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit(); // save on enter
    } else if (e.key === 'Escape') {
      setEditText(todo.text); // cancel on escape
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            className="todo-edit-input"
            autoFocus
          />
        ) : (
          <span
            className="todo-text"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}