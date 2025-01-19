import React, { useState } from 'react';

function SearchFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default SearchFilter;

