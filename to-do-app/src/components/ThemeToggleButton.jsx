import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// button to switch between light and dark mode
export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? ' Cold Mode' : 'Light Mode'}
    </button>
  );
}