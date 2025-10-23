import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '7cc47efa6e4a423fb15b13665b58b58f'
                    }
                    'budget-dashboard': {
                        table: 'sys_ui_page'
                        id: '01abbb8940534605b08385344d3102fd'
                    }
                    category_entertainment: {
                        table: 'x_hete_personal_bu_budget_categories'
                        id: 'fdb58b6128d2462d9c1efac94ba913a9'
                    }
                    category_food: {
                        table: 'x_hete_personal_bu_budget_categories'
                        id: '01263a49d01d4f7296a1137755d775f4'
                    }
                    category_healthcare: {
                        table: 'x_hete_personal_bu_budget_categories'
                        id: '8c33c46605634e35a32e8cf599a4f34b'
                    }
                    category_shopping: {
                        table: 'x_hete_personal_bu_budget_categories'
                        id: 'c91cebea54804c1aa5f59afa301194ff'
                    }
                    category_transportation: {
                        table: 'x_hete_personal_bu_budget_categories'
                        id: '6c6e246b99e544aaa44f5eaafd736947'
                    }
                    category_utilities: {
                        table: 'x_hete_personal_bu_budget_categories'
                        id: 'aa2fc31180174e95bb8f87b3eca3446e'
                    }
                    expense_1: {
                        table: 'x_hete_personal_bu_expenses'
                        id: 'bafe1c4856a74dd9bdea86327badd05a'
                    }
                    expense_10: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '4047d8b490664cd8a0d590af90a76724'
                    }
                    expense_11: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '417fda82b175401aa8e254ecde3f12e3'
                    }
                    expense_12: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '7fcc8e97e6324a328a5d02c5a6b5eade'
                    }
                    expense_2: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '00a1a922521b4b43b7c859c63ea0a4b0'
                    }
                    expense_3: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '0f6ec5c6fd9d44ef93e7379b9e5968c4'
                    }
                    expense_4: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '6b15af2396e84168aa5da99a912cc996'
                    }
                    expense_5: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '073b4ad814f64b03bdfe951482ac4df1'
                    }
                    expense_6: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '0315f6889648436da5e747a36dcdc8cb'
                    }
                    expense_7: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '9847ea13150d4a6b914376ad122345c4'
                    }
                    expense_8: {
                        table: 'x_hete_personal_bu_expenses'
                        id: '1e46a821726a4ed4a8090a8b5a7b9f69'
                    }
                    expense_9: {
                        table: 'x_hete_personal_bu_expenses'
                        id: 'd13df9e302984fe3b4c5b153757d1bc3'
                    }
                    expense_delete_br: {
                        table: 'sys_script'
                        id: 'd35471249ae841efbaca1a26281ab910'
                    }
                    expense_insert_br: {
                        table: 'sys_script'
                        id: '9ddd4c90e9c84fc8b9f61e01a33b35e2'
                    }
                    expense_update_br: {
                        table: 'sys_script'
                        id: '8d0b6742fcbf482cb4a42f618b0af6c3'
                    }
                    monthly_budget_1: {
                        table: 'x_hete_personal_bu_monthly_budgets'
                        id: '016e61a4a6ef476dacc8e700de6d36f9'
                    }
                    monthly_budget_2: {
                        table: 'x_hete_personal_bu_monthly_budgets'
                        id: '453b4d49afca467f999c36ab1cdf20da'
                    }
                    monthly_budget_3: {
                        table: 'x_hete_personal_bu_monthly_budgets'
                        id: 'acf3322bf7674299a47b820a7cb13fa7'
                    }
                    monthly_budget_4: {
                        table: 'x_hete_personal_bu_monthly_budgets'
                        id: '4b89a8fab4d24bdb8a4979ef18980b8f'
                    }
                    monthly_budget_5: {
                        table: 'x_hete_personal_bu_monthly_budgets'
                        id: 'da7e8387c0d04476bae8264508eff526'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '25a25ef3c54841bea4927db47fd4a04b'
                    }
                    'src_server_budget-calculations_js': {
                        table: 'sys_module'
                        id: '35a9999713394b01820837da1698d20c'
                    }
                    'x_hete_personal_bu/main': {
                        table: 'sys_ux_lib_asset'
                        id: '911b646ae461455ba71e2cb11ce12582'
                    }
                    'x_hete_personal_bu/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '0a38550e91a54031b4d6f9db7e775cf2'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0428d4eb3960477ba823f4ae6cecaf3a'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10c878d3f7e9417aaa334070fa6701d2'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'monthly_budget'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '164457a286c64e42ba30e0e206a34d06'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a290f905264489ba78daf853dbb73be'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c07f7d0e0884185b9aeb69ddb79e5dc'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'default_monthly_amount'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '231d8827de9c445eb43a027f2c7f7d89'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a6684742c9c4a7e8b4bd7ec7e856370'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f5be09d3725418fa8de38ce52d2dd6e'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'spent_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37210bdcaa8641d29805a6dae937af82'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a704794ac3e44bb82814d7bd0419d4d'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'budgeted_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c87c0e7c9b041bbb7b571d977cbdaec'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43406f1916fb46eca35b0643f590f983'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'remaining_amount'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '484e7ad5a9384ad28155b0ace6f19da8'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '48cf2c5653f3434eb2f0e77a5f067b1d'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4fec9b8213c24fdd9851ca6475ac72fc'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58226e3355434a378faf6358e610ab7d'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59cb9eb40f4c4dc8982b7c334a2b94e6'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'default_monthly_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66eeb307ee4a42a98bf0be0cc8faefdb'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '67cba2bd375643838bf02fb8fd0e7490'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d8a2a1a037a4223bac5210fb166b663'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '751f4d1d97fd45eb91c4be2622eee3f8'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'monthly_budget'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75301721286444a995d913653db6ed4c'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'budget_month'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d2805ca938644b987e6bc65506b4560'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80c1fb50a3f84e2298e86548192e8650'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86ba75dd438b4ad2af0b76f94cf0a068'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f4179fb6b3142b9aae9a43f45ddd323'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'remaining_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99c6400e9c6a43c990789149a436b75a'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a436e8338f924566b84ac4a4a655bb9a'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7895196687949f2ad7e1166151412f2'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a794175191de4545a68b809d1c4e97b5'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aeb4a680f42a40c1b14e1b8af1eab4c9'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'budget_month'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b209a21bc709428f902599b652fba9b2'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'spent_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b85da8f70c0144c28db81ed18c0d678a'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b86d4249646640adbebf8bbdd4db9127'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbb33d4935084b8180eb741461aa2a0c'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bd732d8d8c1e43719d7f2a5839e74087'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db5026b6949d4fd99b6333c159888836'
                        key: {
                            name: 'x_hete_personal_bu_expenses'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbc6deef744d4f3ebd294d10affc1a2a'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e091df0e5ac443148348d0902ece7fe0'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e3bfc5877f7542e2b8f826ef0c9d9919'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e78f0708914b4cbf84f0300fc22dcb5e'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eab73fab27f34af883061b865160f3bc'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efee55b46ca841228a9abb56ec77f3ff'
                        key: {
                            name: 'x_hete_personal_bu_monthly_budgets'
                            element: 'budgeted_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa8d28a532f047d4ac84717b1aa9bbca'
                        key: {
                            name: 'x_hete_personal_bu_budget_categories'
                            element: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
