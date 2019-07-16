let myAccount = {
    name: 'Christian Tisby',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)

//  Challenge Area

// addIncome

let addIncome = function (account, income) {
    account.income = account.income + income
}

// resetAccount

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
// getAccountSummary

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))

// Account for Andrew has $900, $1000 in income, $100 in expenses

// addIncome
// addExpense
// addExpense
// getAccountSummary
// reset Account
// getAccountSummary