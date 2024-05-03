import React, { useState } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([
    // Sample transaction data
    { id: 1, date: '2024-05-01', description: 'Payment received', category: 'Income', amount: 1000 },
    { id: 2, date: '2024-05-02', description: 'Grocery shopping', category: 'Expenses', amount: -50 },
    { id: 3, date: '2024-05-03', description: 'Internet bill', category: 'Expenses', amount: -80 },
    { id: 4, date: '2024-05-04', description: 'Salary deposit', category: 'Income', amount: 2000 }
  ]);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  function handleAddTransaction(formData) {
    const newTransaction = {
      id: transactions.length + 1,
      ...formData
    };
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  }

  return (
    <div style={{ textAlign: 'center',}}>
      <h1>Bank of Flatiron</h1>
      <Form onAddTransaction={handleAddTransaction} />
      <SearchBar transactions={transactions} setFilteredTransactions={setFilteredTransactions} />
      <Table transactions={filteredTransactions} />
    </div>
  );
}

export default App;
