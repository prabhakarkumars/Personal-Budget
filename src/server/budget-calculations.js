import { gs, GlideRecord } from '@servicenow/glide'

/**
 * Business rule script to update monthly budget totals when expenses are added/updated/deleted
 */
export function updateBudgetTotals(current, previous) {
    // Get the category and expense date to find the correct monthly budget
    const categoryId = current.getValue('category')
    const expenseDate = current.getValue('expense_date')
    
    if (!categoryId || !expenseDate) {
        return
    }
    
    // Extract year and month from expense date (YYYY-MM-DD format)
    const expenseDateParts = expenseDate.split('-')
    const expenseYear = expenseDateParts[0]
    const expenseMonth = expenseDateParts[1]
    const budgetMonthKey = expenseYear + '-' + expenseMonth + '-01'
    
    // Find the corresponding monthly budget record
    const monthlyBudgetGr = new GlideRecord('x_hete_personal_bu_monthly_budgets')
    monthlyBudgetGr.addQuery('category', categoryId)
    monthlyBudgetGr.addQuery('budget_month', budgetMonthKey)
    monthlyBudgetGr.query()
    
    if (monthlyBudgetGr.next()) {
        // Calculate total spent for this category in this month
        const expenseGr = new GlideRecord('x_hete_personal_bu_expenses')
        expenseGr.addQuery('category', categoryId)
        expenseGr.addQuery('expense_date', 'STARTSWITH', expenseYear + '-' + expenseMonth)
        expenseGr.query()
        
        let totalSpent = 0
        while (expenseGr.next()) {
            const amount = parseFloat(expenseGr.getValue('amount') || '0')
            totalSpent += amount
        }
        
        // Update monthly budget record
        monthlyBudgetGr.setValue('spent_amount', totalSpent.toString())
        
        const budgetedAmount = parseFloat(monthlyBudgetGr.getValue('budgeted_amount') || '0')
        const remainingAmount = budgetedAmount - totalSpent
        monthlyBudgetGr.setValue('remaining_amount', remainingAmount.toString())
        
        monthlyBudgetGr.update()
        
        // Alert if budget exceeded
        if (remainingAmount < 0) {
            gs.addErrorMessage('Budget exceeded for ' + monthlyBudgetGr.category.getDisplayValue() + ' by $' + Math.abs(remainingAmount).toFixed(2))
        } else if (remainingAmount < (budgetedAmount * 0.1)) {
            gs.addWarningMessage('Budget warning: Only $' + remainingAmount.toFixed(2) + ' remaining for ' + monthlyBudgetGr.category.getDisplayValue())
        }
    }
}