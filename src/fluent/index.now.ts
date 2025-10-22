import '@servicenow/sdk/global'

// Import all tables
import './tables/budget-categories.now.js'
import './tables/monthly-budgets.now.js'
import './tables/expenses.now.js'

// Import all business rules
import './business-rules/expense-budget-updates.now.js'

// Import sample data
import './records/sample-categories.now.js'