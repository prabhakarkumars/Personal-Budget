import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample Budget Categories
Record({
    $id: Now.ID['category_food'],
    table: 'x_hete_personal_bu_budget_categories',
    data: {
        name: 'Food & Dining',
        description: 'Groceries, restaurants, takeout, and food-related expenses',
        default_monthly_amount: 400.00,
        active: true
    }
})

Record({
    $id: Now.ID['category_transportation'],
    table: 'x_hete_personal_bu_budget_categories',
    data: {
        name: 'Transportation',
        description: 'Gas, car maintenance, public transit, rideshare',
        default_monthly_amount: 200.00,
        active: true
    }
})

Record({
    $id: Now.ID['category_entertainment'],
    table: 'x_hete_personal_bu_budget_categories',
    data: {
        name: 'Entertainment',
        description: 'Movies, games, subscriptions, recreational activities',
        default_monthly_amount: 150.00,
        active: true
    }
})

Record({
    $id: Now.ID['category_utilities'],
    table: 'x_hete_personal_bu_budget_categories',
    data: {
        name: 'Utilities',
        description: 'Electric, water, internet, phone bills',
        default_monthly_amount: 250.00,
        active: true
    }
})

Record({
    $id: Now.ID['category_shopping'],
    table: 'x_hete_personal_bu_budget_categories',
    data: {
        name: 'Shopping',
        description: 'Clothing, household items, personal care',
        default_monthly_amount: 300.00,
        active: true
    }
})

Record({
    $id: Now.ID['category_healthcare'],
    table: 'x_hete_personal_bu_budget_categories',
    data: {
        name: 'Healthcare',
        description: 'Medical appointments, prescriptions, health insurance',
        default_monthly_amount: 100.00,
        active: true
    }
})