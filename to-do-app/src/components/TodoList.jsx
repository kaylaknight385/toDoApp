import React from 'react';
import { useTodos } from '../context/TodoContext';
import { useFilter } from '../context/FilterContext';
import { TodoItem } from './TodoItem';

// displays the list of todos based on current filter
export function TodoList() {
  const { todos } = useTodos();
  const { filter } = useFilter();

  // filter todos based on what button is clicked
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // show everything if 'all' is selected
  });

  // show a nice message if there's nothing to display
  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        {filter === 'all' && 'No todos yet. Add one above!'}
        {filter === 'active' && 'No active todos!'}
        {filter === 'completed' && 'No completed todos!'}
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}