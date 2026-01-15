import React, { createContext, useContext, useState, useEffect } from 'react';

// handles light/dark mode switching
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // check if user had a theme preference saved, default to light mode
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // remember the theme choice for next time
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // flip between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// hook to access theme stuff from any component
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}