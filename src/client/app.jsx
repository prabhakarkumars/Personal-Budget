import React, { useState, useEffect, useMemo } from 'react';
import { BudgetService } from './services/BudgetService.js';
import BudgetDashboard from './components/BudgetDashboard.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import BudgetForm from './components/BudgetForm.jsx';
import './app.css';

export default function App() {
  const service = useMemo(() => new BudgetService(), []);
  const [currentView, setCurrentView] = useState('dashboard');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refresh = () => setRefreshTrigger(prev => prev + 1);

  const renderView = () => {
    switch(currentView) {
      case 'expenses':
        return <ExpenseList service={service} refreshTrigger={refreshTrigger} onRefresh={refresh} />;
      case 'add-expense':
        return <ExpenseForm service={service} onSave={() => { refresh(); setCurrentView('expenses'); }} onCancel={() => setCurrentView('expenses')} />;
      case 'add-budget':
        return <BudgetForm service={service} onSave={() => { refresh(); setCurrentView('dashboard'); }} onCancel={() => setCurrentView('dashboard')} />;
      default:
        return <BudgetDashboard service={service} refreshTrigger={refreshTrigger} />;
    }
  };

  return (
    <div className="budget-app">
      <header className="app-header">
        <h1>Personal Budget Tracker</h1>
        <nav className="app-nav">
          <button 
            className={currentView === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={currentView === 'expenses' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('expenses')}
          >
            Expenses
          </button>
          <button 
            className="nav-btn expense-btn"
            onClick={() => setCurrentView('add-expense')}
          >
            + Add Expense
          </button>
          <button 
            className="nav-btn action-btn"
            onClick={() => setCurrentView('add-budget')}
          >
            + Add Budget
          </button>
        </nav>
      </header>
      
      <main className="app-main">
        {renderView()}
      </main>
    </div>
  );
}