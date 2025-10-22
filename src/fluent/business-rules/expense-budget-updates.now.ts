import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { updateBudgetTotals } from '../../server/budget-calculations.js'

// Business rule to update budget totals when expenses are inserted
BusinessRule({
    $id: Now.ID['expense_insert_br'],
    name: 'Update Budget Totals on Expense Insert',
    table: 'x_hete_personal_bu_expenses',
    when: 'after',
    action: ['insert'],
    script: updateBudgetTotals,
    order: 100,
    active: true,
    description: 'Updates monthly budget totals when new expenses are added'
})

// Business rule to update budget totals when expenses are updated
BusinessRule({
    $id: Now.ID['expense_update_br'],
    name: 'Update Budget Totals on Expense Update',
    table: 'x_hete_personal_bu_expenses',
    when: 'after',
    action: ['update'],
    script: updateBudgetTotals,
    order: 100,
    active: true,
    description: 'Updates monthly budget totals when expenses are modified'
})

// Business rule to update budget totals when expenses are deleted
BusinessRule({
    $id: Now.ID['expense_delete_br'],
    name: 'Update Budget Totals on Expense Delete',
    table: 'x_hete_personal_bu_expenses',
    when: 'after',
    action: ['delete'],
    script: updateBudgetTotals,
    order: 100,
    active: true,
    description: 'Updates monthly budget totals when expenses are deleted'
})