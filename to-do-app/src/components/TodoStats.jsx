import React from 'react';
import { useTodos } from '../context/TodoContext';

// shows stats about your todos and lets you clear completed ones
export function TodoStats() {
  const { todos, clearCompleted } = useTodos();

  // count up the different types of todos
  const totalTodos = todos.length;
  const activeTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <span>{activeTodos} active</span>
        <span className="separator">•</span>
        <span>{completedTodos} completed</span>
        <span className="separator">•</span>
        <span>{totalTodos} total</span>
      </div>
      {/* only show clear button if there's stuff to clear */}
      {completedTodos > 0 && (
        <button onClick={clearCompleted} className="clear-button">
          Clear Completed
        </button>
      )}
    </div>
  );
}