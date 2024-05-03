import React from 'react';

const Table = ({ transactions }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid darkblue', backgroundColor: 'darkblue' }}>
      <thead>
        <tr>
          <th style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Date</th>
          <th style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Description</th>
          <th style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Category</th>
          <th style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: 'white' }}>{transaction.date}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: 'white' }}>{transaction.description}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: 'white' }}>{transaction.category}</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'left', backgroundColor: 'white' }}>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
