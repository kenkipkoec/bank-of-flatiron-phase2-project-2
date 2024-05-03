import React, { useState } from 'react';

function Form() {
  function useForm(initialState) {
    return useState(initialState);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleAddTransaction() {
    setFormData({
      Date: '',
      Description: '',
      Category: '',
      Amount: '',
    });
  }

  const [formData, setFormData] = useForm({
    Date: '',
    Description: '',
    Category: '',
    Amount: '',
  });

  return (
    <div className='form' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <form action='bankOfFlatiron' method='POST' className='form1' style={{
        float: 'left',
        margin: 'auto',
        padding: '40px',
        display: 'inline-flex',
        gap: '4cm'
      }}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={handleInputChange}
            placeholder="Date"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleInputChange}
            placeholder="Description"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="Category"
            value={formData.Category}
            onChange={handleInputChange}
            placeholder="Category"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="Amount"
            value={formData.Amount}
            onChange={handleInputChange}
            placeholder="Amount"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      </form>
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
}

export default Form;
