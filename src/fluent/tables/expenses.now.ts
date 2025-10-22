import '@servicenow/sdk/global'
import { Table, StringColumn, DecimalColumn, DateColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Expenses table - tracks individual expenses against budget categories
export const x_hete_personal_bu_expenses = Table({
    name: 'x_hete_personal_bu_expenses',
    label: 'Expenses',
    schema: {
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 255,
            mandatory: true
        }),
        amount: DecimalColumn({ 
            label: 'Amount', 
            mandatory: true
        }),
        expense_date: DateColumn({ 
            label: 'Expense Date', 
            mandatory: true,
            default: 'javascript:gs.nowDateTime().getDisplayValue().split(" ")[0]'
        }),
        category: ReferenceColumn({ 
            label: 'Budget Category',
            referenceTable: 'x_hete_personal_bu_budget_categories',
            mandatory: true
        }),
        monthly_budget: ReferenceColumn({ 
            label: 'Monthly Budget',
            referenceTable: 'x_hete_personal_bu_monthly_budgets',
            read_only: true
        }),
        notes: StringColumn({ 
            label: 'Notes', 
            maxLength: 500 
        })
    },
    display: 'description',
    audit: true
})