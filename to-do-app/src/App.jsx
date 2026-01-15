import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { FilterProvider } from './contexts/FilterContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterButtons } from './components/FilterButtons';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { TodoStats } from './components/TodoStats';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <header className="app-header">
          <h1>Todo App</h1>
          <ThemeToggleButton />
        </header>

        <TodoInput />
        <FilterButtons />
        <TodoList />
        <TodoStats />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <AppContent />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;