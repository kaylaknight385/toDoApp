import React, { createContext, useContext, useState, useEffect } from 'react';

// this is where all the todo magic happens
const TodoContext = createContext();

export function TodoProvider({ children }) {
  // grab todos from storage when app loads, or start fresh if there's nothing
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // save todos to browser storage so they don't disappear when you refresh
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // add a new todo to the list
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // using timestamp as id, good enough for now
      text: text.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // check or uncheck a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delte a todo out of existence
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // update the text of an existing todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  // remove all the checked off todos at once
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// custom hook to use todos anywhere in the app
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}