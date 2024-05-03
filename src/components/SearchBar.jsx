// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ setFilteredTransactions }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Update filtered transactions here if needed
    setFilteredTransactions(query);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>Search Transactions:</label>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchQuery}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    </div>
  );
}

export default SearchBar;
