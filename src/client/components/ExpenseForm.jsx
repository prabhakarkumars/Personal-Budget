import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function ExpenseForm({ service, onSave, onCancel }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    expense_date: new Date().toISOString().split('T')[0],
    category: '',
    payment_method: 'credit_card',
    notes: ''
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const categoryData = await service.getBudgetCategories();
      setCategories(categoryData);
      if (categoryData.length > 0) {
        setFormData(prev => ({ ...prev, category: display(categoryData[0].name) }));
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.description.trim() || !formData.amount || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await service.createExpense({
        description: formData.description,
        amount: parseFloat(formData.amount),
        expense_date: formData.expense_date,
        category: formData.category,
        payment_method: formData.payment_method,
        notes: formData.notes
      });
      onSave();
    } catch (error) {
      console.error('Error creating expense:', error);
      alert('Failed to create expense');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="expense-form">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Add New Expense</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Description *</label>
              <input
                type="text"
                className="form-control"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="e.g., Lunch at restaurant"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Amount *</label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleChange('amount', e.target.value)}
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Date *</label>
              <input
                type="date"
                className="form-control"
                value={formData.expense_date}
                onChange={(e) => handleChange('expense_date', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Category *</label>
              <select
                className="form-control"
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={value(category.sys_id)} value={display(category.name)}>
                    {display(category.name)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select
              className="form-control"
              value={formData.payment_method}
              onChange={(e) => handleChange('payment_method', e.target.value)}
            >
              <option value="credit_card">Credit Card</option>
              <option value="debit_card">Debit Card</option>
              <option value="cash">Cash</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="digital_wallet">Digital Wallet</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea
              className="form-control"
              rows="3"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Additional notes about this expense..."
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Expense'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}