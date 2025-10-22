import '@servicenow/sdk/global'
import { Table, StringColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

// Budget Categories table - defines expense categories for personal budget tracking
export const x_hete_personal_bu_budget_categories = Table({
    name: 'x_hete_personal_bu_budget_categories',
    label: 'Budget Categories',
    schema: {
        name: StringColumn({ 
            label: 'Category Name', 
            maxLength: 100,
            mandatory: true
        }),
        description: StringColumn({ 
            label: 'Description', 
            maxLength: 255 
        }),
        default_monthly_amount: DecimalColumn({ 
            label: 'Default Monthly Amount',
            default: '0.00'
        }),
        active: BooleanColumn({ 
            label: 'Active', 
            default: true 
        })
    },
    display: 'name',
    audit: true
})