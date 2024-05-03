// Form.js
import React, { useState } from 'react';

function Form({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction(formData);
    // Reset form data after submission if needed
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: 0,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} className='form1' style={{ float: 'left', margin: 'auto', padding: '40px', display: 'inline-flex', gap: '4cm' }}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Date"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
        </div>
      </form>
      <button type="submit" onClick={handleSubmit} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Transaction</button>
    </div>
  );
}

export default Form;
