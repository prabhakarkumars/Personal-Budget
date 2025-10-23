import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function BudgetDashboard({ service, refreshTrigger }) {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
  });

  useEffect(() => {
    loadData();
  }, [refreshTrigger, selectedMonth]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [budgetData, expenseData, categoryData] = await Promise.all([
        service.getMonthlyBudgets(selectedMonth),
        service.getExpenses(selectedMonth, getMonthEnd(selectedMonth)),
        service.getBudgetCategories()
      ]);
      
      setBudgets(budgetData);
      setExpenses(expenseData);
      setCategories(categoryData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMonthEnd = (monthStart) => {
    const date = new Date(monthStart);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.toISOString().split('T')[0];
  };

  const calculateBudgetProgress = (categoryName, budgetedAmount) => {
    const categoryExpenses = expenses.filter(expense => 
      display(expense.category) === categoryName
    );
    
    const totalSpent = categoryExpenses.reduce((sum, expense) => 
      sum + parseFloat(display(expense.amount) || 0), 0
    );
    
    const percentage = budgetedAmount > 0 ? (totalSpent / budgetedAmount) * 100 : 0;
    const remaining = budgetedAmount - totalSpent;
    
    return {
      totalSpent,
      remaining,
      percentage: Math.min(percentage, 100),
      status: percentage <= 75 ? 'good' : percentage <= 90 ? 'warning' : 'danger'
    };
  };

  const getTotalBudgetSummary = () => {
    const totalBudgeted = budgets.reduce((sum, budget) => 
      sum + parseFloat(display(budget.budgeted_amount) || 0), 0
    );
    
    const totalSpent = expenses.reduce((sum, expense) => 
      sum + parseFloat(display(expense.amount) || 0), 0
    );
    
    return {
      totalBudgeted,
      totalSpent,
      totalRemaining: totalBudgeted - totalSpent,
      overallPercentage: totalBudgeted > 0 ? (totalSpent / totalBudgeted) * 100 : 0
    };
  };

  if (loading) {
    return <div className="loading">Loading budget data...</div>;
  }

  const summary = getTotalBudgetSummary();

  return (
    <div className="budget-dashboard">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Budget Overview</h2>
          <div>
            <label htmlFor="month-select" style={{ marginRight: '0.5rem' }}>Month:</label>
            <select 
              id="month-select"
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="form-control"
              style={{ width: 'auto', display: 'inline-block' }}
            >
              <option value="2024-01-01">January 2024</option>
              <option value="2024-02-01">February 2024</option>
              <option value="2024-03-01">March 2024</option>
              <option value="2024-04-01">April 2024</option>
              <option value="2024-05-01">May 2024</option>
              <option value="2024-06-01">June 2024</option>
            </select>
          </div>
        </div>
        
        <div className="expense-stats">
          <div className="card">
            <h4>Total Budgeted</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3498db' }}>
              ${summary.totalBudgeted.toFixed(2)}
            </p>
          </div>
          <div className="card">
            <h4>Total Spent</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c' }}>
              ${summary.totalSpent.toFixed(2)}
            </p>
          </div>
          <div className="card">
            <h4>Remaining</h4>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: summary.totalRemaining >= 0 ? '#2ecc71' : '#e74c3c' 
            }}>
              ${summary.totalRemaining.toFixed(2)}
            </p>
          </div>
          <div className="card">
            <h4>Budget Used</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {summary.overallPercentage.toFixed(1)}%
            </p>
            <div className="progress-bar">
              <div 
                className={`progress-fill progress-${
                  summary.overallPercentage <= 75 ? 'good' : 
                  summary.overallPercentage <= 90 ? 'warning' : 'danger'
                }`}
                style={{ width: `${Math.min(summary.overallPercentage, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="budget-grid">
        {budgets.length === 0 ? (
          <div className="empty-state">
            <h3>No budgets found</h3>
            <p>Create a monthly budget to start tracking your expenses.</p>
          </div>
        ) : (
          budgets.map(budget => {
            const categoryName = display(budget.category);
            const budgetedAmount = parseFloat(display(budget.budgeted_amount) || 0);
            const progress = calculateBudgetProgress(categoryName, budgetedAmount);
            
            return (
              <div key={value(budget.sys_id)} className="card">
                <div className="card-header">
                  <h3 className="card-title">{categoryName}</h3>
                  <span className={`status-${progress.status}`}>
                    {progress.percentage.toFixed(1)}%
                  </span>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Budgeted:</span>
                    <strong>${budgetedAmount.toFixed(2)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Spent:</span>
                    <strong>${progress.totalSpent.toFixed(2)}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Remaining:</span>
                    <strong className={progress.remaining >= 0 ? 'status-good' : 'status-danger'}>
                      ${progress.remaining.toFixed(2)}
                    </strong>
                  </div>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className={`progress-fill progress-${progress.status}`}
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
                
                {display(budget.notes) && (
                  <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#7f8c8d' }}>
                    {display(budget.notes)}
                  </p>
                )}
              </div>
            );
          })
        )}
      </div>

      {expenses.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Expenses</h3>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              {expenses.slice(0, 5).map(expense => (
                <tr key={value(expense.sys_id)}>
                  <td>{display(expense.expense_date)}</td>
                  <td>{display(expense.description)}</td>
                  <td>{display(expense.category)}</td>
                  <td>${parseFloat(display(expense.amount) || 0).toFixed(2)}</td>
                  <td>{display(expense.payment_method).replace('_', ' ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}