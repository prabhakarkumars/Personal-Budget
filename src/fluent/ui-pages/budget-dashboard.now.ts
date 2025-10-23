import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import budgetPage from '../../client/index.html'

export const budget_dashboard = UiPage({
    $id: Now.ID['budget-dashboard'],
    endpoint: 'x_hete_personal_bu_budget_dashboard.do',
    html: budgetPage,
    direct: true
})