import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function BudgetForm({ service, onSave, onCancel }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    budget_month: new Date().toISOString().slice(0, 7) + '-01',
    category: '',
    budgeted_amount: '',
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
    
    if (!formData.category || !formData.budgeted_amount) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await service.createMonthlyBudget({
        budget_month: formData.budget_month,
        category: formData.category,
        budgeted_amount: parseFloat(formData.budgeted_amount),
        notes: formData.notes
      });
      onSave();
    } catch (error) {
      console.error('Error creating budget:', error);
      alert('Failed to create budget');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="budget-form">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Add Monthly Budget</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Budget Month *</label>
              <input
                type="month"
                className="form-control"
                value={formData.budget_month.slice(0, 7)}
                onChange={(e) => handleChange('budget_month', e.target.value + '-01')}
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
            <label className="form-label">Budgeted Amount *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              className="form-control"
              value={formData.budgeted_amount}
              onChange={(e) => handleChange('budgeted_amount', e.target.value)}
              placeholder="0.00"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Notes</label>
            <textarea
              className="form-control"
              rows="3"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Notes about this budget..."
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Budget'}
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