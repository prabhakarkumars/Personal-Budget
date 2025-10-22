import '@servicenow/sdk/global'
import { Table, StringColumn, DecimalColumn, DateColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Monthly Budgets table - sets budget amounts for each category per month
export const x_hete_personal_bu_monthly_budgets = Table({
    name: 'x_hete_personal_bu_monthly_budgets',
    label: 'Monthly Budgets',
    schema: {
        budget_month: DateColumn({ 
            label: 'Budget Month', 
            mandatory: true 
        }),
        category: ReferenceColumn({ 
            label: 'Budget Category',
            referenceTable: 'x_hete_personal_bu_budget_categories',
            mandatory: true
        }),
        budgeted_amount: DecimalColumn({ 
            label: 'Budgeted Amount', 
            mandatory: true,
            default: '0.00'
        }),
        spent_amount: DecimalColumn({ 
            label: 'Spent Amount', 
            default: '0.00',
            read_only: true
        }),
        remaining_amount: DecimalColumn({ 
            label: 'Remaining Amount', 
            default: '0.00',
            read_only: true
        }),
        notes: StringColumn({ 
            label: 'Notes', 
            maxLength: 500 
        })
    },
    display: 'budget_month',
    audit: true
})