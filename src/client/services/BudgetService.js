export class BudgetService {
  constructor() {
    this.budgetCategoriesTable = "x_hete_personal_bu_budget_categories";
    this.monthlyBudgetsTable = "x_hete_personal_bu_monthly_budgets"; 
    this.expensesTable = "x_hete_personal_bu_expenses";
  }

  async getBudgetCategories() {
    const response = await fetch(`/api/now/table/${this.budgetCategoriesTable}?sysparm_display_value=all&sysparm_query=active=true^ORDERBYname`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch budget categories');
    }
    
    const { result } = await response.json();
    return result || [];
  }

  async getMonthlyBudgets(month = null) {
    let query = "";
    if (month) {
      query = `budget_month=${month}`;
    }
    query += "^ORDERBYbudget_month^ORDERBYcategory";
    
    const response = await fetch(`/api/now/table/${this.monthlyBudgetsTable}?sysparm_display_value=all&sysparm_query=${query}`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch monthly budgets');
    }
    
    const { result } = await response.json();
    return result || [];
  }

  async getExpenses(startDate = null, endDate = null, category = null) {
    let query = "";
    const queryParts = [];
    
    if (startDate) {
      queryParts.push(`expense_date>=${startDate}`);
    }
    if (endDate) {
      queryParts.push(`expense_date<=${endDate}`);
    }
    if (category) {
      queryParts.push(`category=${category}`);
    }
    
    if (queryParts.length > 0) {
      query = queryParts.join("^");
    }
    query += "^ORDERBYDESCexpense_date";
    
    const response = await fetch(`/api/now/table/${this.expensesTable}?sysparm_display_value=all&sysparm_query=${query}`, {
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch expenses');
    }
    
    const { result } = await response.json();
    return result || [];
  }

  async createExpense(expenseData) {
    const response = await fetch(`/api/now/table/${this.expensesTable}?sysparm_display_value=all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify(expenseData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create expense');
    }
    
    return response.json();
  }

  async updateExpense(sysId, expenseData) {
    const response = await fetch(`/api/now/table/${this.expensesTable}/${sysId}?sysparm_display_value=all`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify(expenseData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to update expense');
    }
    
    return response.json();
  }

  async deleteExpense(sysId) {
    const response = await fetch(`/api/now/table/${this.expensesTable}/${sysId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      }
    });
    
    return response.ok;
  }

  async createMonthlyBudget(budgetData) {
    const response = await fetch(`/api/now/table/${this.monthlyBudgetsTable}?sysparm_display_value=all`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-UserToken": window.g_ck
      },
      body: JSON.stringify(budgetData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create monthly budget');
    }
    
    return response.json();
  }
}