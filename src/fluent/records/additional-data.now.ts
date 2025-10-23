import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Additional Monthly Budget Records for better testing
Record({
    $id: Now.ID['monthly_budget_1'],
    table: 'x_hete_personal_bu_monthly_budgets',
    data: {
        budget_month: '2024-01-01',
        category: 'Food & Dining',
        budgeted_amount: 450.00,
        notes: 'Increased budget for January to try new restaurants'
    },
})

Record({
    $id: Now.ID['monthly_budget_2'],
    table: 'x_hete_personal_bu_monthly_budgets',
    data: {
        budget_month: '2024-01-01',
        category: 'Transportation',
        budgeted_amount: 180.00,
        notes: 'Lower commute costs due to remote work days'
    },
})

Record({
    $id: Now.ID['monthly_budget_3'],
    table: 'x_hete_personal_bu_monthly_budgets',
    data: {
        budget_month: '2024-01-01',
        category: 'Entertainment',
        budgeted_amount: 200.00,
        notes: 'Movie subscriptions and weekend activities'
    },
})

Record({
    $id: Now.ID['monthly_budget_4'],
    table: 'x_hete_personal_bu_monthly_budgets',
    data: {
        budget_month: '2024-02-01',
        category: 'Food & Dining',
        budgeted_amount: 400.00,
        notes: 'Back to normal dining budget'
    },
})

Record({
    $id: Now.ID['monthly_budget_5'],
    table: 'x_hete_personal_bu_monthly_budgets',
    data: {
        budget_month: '2024-02-01',
        category: 'Shopping',
        budgeted_amount: 350.00,
        notes: 'Valentine\'s Day and spring wardrobe'
    },
})

// Sample Expense Records
Record({
    $id: Now.ID['expense_1'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Lunch at Italian Bistro',
        amount: 28.50,
        expense_date: '2024-01-15',
        category: 'Food & Dining',
        payment_method: 'credit_card',
        notes: 'Team lunch meeting'
    },
})

Record({
    $id: Now.ID['expense_2'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Gas fill-up',
        amount: 45.80,
        expense_date: '2024-01-14',
        category: 'Transportation',
        payment_method: 'debit_card',
        notes: 'Weekly commute to office'
    },
})

Record({
    $id: Now.ID['expense_3'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Movie tickets',
        amount: 22.00,
        expense_date: '2024-01-12',
        category: 'Entertainment',
        payment_method: 'credit_card',
        notes: 'Date night at cinema'
    },
})

Record({
    $id: Now.ID['expense_4'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Grocery shopping',
        amount: 127.45,
        expense_date: '2024-01-20',
        category: 'Food & Dining',
        payment_method: 'debit_card',
        notes: 'Weekly groceries and meal prep'
    },
})

Record({
    $id: Now.ID['expense_5'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Netflix subscription',
        amount: 15.99,
        expense_date: '2024-01-01',
        category: 'Entertainment',
        payment_method: 'credit_card',
        notes: 'Monthly streaming service'
    },
})

Record({
    $id: Now.ID['expense_6'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'New winter jacket',
        amount: 89.99,
        expense_date: '2024-01-08',
        category: 'Shopping',
        payment_method: 'credit_card',
        notes: 'Essential winter clothing'
    },
})

Record({
    $id: Now.ID['expense_7'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Electricity bill',
        amount: 94.33,
        expense_date: '2024-01-05',
        category: 'Utilities',
        payment_method: 'bank_transfer',
        notes: 'Monthly utility payment'
    },
})

Record({
    $id: Now.ID['expense_8'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Coffee shop',
        amount: 8.75,
        expense_date: '2024-01-22',
        category: 'Food & Dining',
        payment_method: 'cash',
        notes: 'Morning coffee and pastry'
    },
})

Record({
    $id: Now.ID['expense_9'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Bus pass renewal',
        amount: 65.00,
        expense_date: '2024-01-01',
        category: 'Transportation',
        payment_method: 'debit_card',
        notes: 'Monthly public transit pass'
    },
})

Record({
    $id: Now.ID['expense_10'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Concert tickets',
        amount: 85.00,
        expense_date: '2024-01-25',
        category: 'Entertainment',
        payment_method: 'credit_card',
        notes: 'Live music event with friends'
    },
})

Record({
    $id: Now.ID['expense_11'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Takeout dinner',
        amount: 34.20,
        expense_date: '2024-02-02',
        category: 'Food & Dining',
        payment_method: 'credit_card',
        notes: 'Thai food delivery'
    },
})

Record({
    $id: Now.ID['expense_12'],
    table: 'x_hete_personal_bu_expenses',
    data: {
        description: 'Phone accessories',
        amount: 25.99,
        expense_date: '2024-02-01',
        category: 'Shopping',
        payment_method: 'credit_card',
        notes: 'Phone case and screen protector'
    },
})