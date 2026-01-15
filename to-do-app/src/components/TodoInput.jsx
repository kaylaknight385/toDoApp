import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

// the input box where you type new todos
export function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    // only add if there's actually text in there
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(''); // clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
}