import React, { useState } from 'react';

const SearchBar = ({ transactions, setFilteredTransactions }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>Search Transactions:</label>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        placeholder="Search by description..."
      />
    </div>
  );
};

export default SearchBar;
