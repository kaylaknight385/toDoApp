import React from 'react';
import { useFilter } from '../context/FilterContext';

// the three buttons to switch between all/active/completed views
export function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter('all')}
        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={`filter-button ${filter === 'active' ? 'active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}