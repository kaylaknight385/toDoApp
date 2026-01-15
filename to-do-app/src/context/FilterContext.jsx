import React, { createContext, useContext, useState } from 'react';

// keeps track of which filter is active (all, active, or completed)
const FilterContext = createContext();

export function FilterProvider({ children }) {
  // default to showing all todos
  const [filter, setFilter] = useState('all');

  const value = {
    filter,
    setFilter,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

// hook to access filter state from any component
export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}