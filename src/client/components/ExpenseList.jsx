import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function ExpenseList({ service, refreshTrigger, onRefresh }) {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    loadData();
  }, [refreshTrigger]);

  useEffect(() => {
    loadExpenses();
  }, [filters]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [expenseData, categoryData] = await Promise.all([
        service.getExpenses(),
        service.getBudgetCategories()
      ]);
      
      setExpenses(expenseData);
      setCategories(categoryData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadExpenses = async () => {
    try {
      const expenseData = await service.getExpenses(
        filters.startDate || null,
        filters.endDate || null,
        filters.category || null
      );
      setExpenses(expenseData);
    } catch (error) {
      console.error('Error loading expenses:', error);
    }
  };

  const handleDelete = async (sysId) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await service.deleteExpense(sysId);
        onRefresh();
      } catch (error) {
        console.error('Error deleting expense:', error);
        alert('Failed to delete expense');
      }
    }
  };

  const getTotalAmount = () => {
    return expenses.reduce((sum, expense) => 
      sum + parseFloat(display(expense.amount) || 0), 0
    );
  };

  if (loading) {
    return <div className="loading">Loading expenses...</div>;
  }

  return (
    <div className="expense-list">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Expense Management</h2>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
            Total: ${getTotalAmount().toFixed(2)}
          </div>
        </div>
        
        {/* Filters */}
        <div className="form-row" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select 
              className="form-control"
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={value(category.sys_id)} value={display(category.name)}>
                  {display(category.name)}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date Range</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="date"
                className="form-control"
                value={filters.startDate}
                onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                placeholder="Start Date"
              />
              <input
                type="date"
                className="form-control"
                value={filters.endDate}
                onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                placeholder="End Date"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        {expenses.length === 0 ? (
          <div className="empty-state">
            <h3>No expenses found</h3>
            <p>Start adding expenses to track your spending.</p>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
                <tr key={value(expense.sys_id)}>
                  <td>{display(expense.expense_date)}</td>
                  <td>{display(expense.description)}</td>
                  <td>
                    <span style={{ 
                      padding: '0.25rem 0.5rem', 
                      backgroundColor: '#e3f2fd', 
                      borderRadius: '4px',
                      fontSize: '0.85rem'
                    }}>
                      {display(expense.category)}
                    </span>
                  </td>
                  <td style={{ fontWeight: 'bold', color: '#e74c3c' }}>
                    ${parseFloat(display(expense.amount) || 0).toFixed(2)}
                  </td>
                  <td style={{ textTransform: 'capitalize' }}>
                    {display(expense.payment_method).replace('_', ' ')}
                  </td>
                  <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {display(expense.notes)}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem' }}
                      onClick={() => handleDelete(value(expense.sys_id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}