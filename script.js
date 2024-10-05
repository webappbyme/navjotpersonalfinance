let totalBudget = 0;
let totalExpenses = 0;

function setBudget() {
    const budgetInput = document.getElementById('total-budget').value;
    totalBudget = parseFloat(budgetInput);
    updateSummary();
}

function addExpense() {
    const expenseTitle = document.getElementById('expense-title').value;
    const expenseCost = document.getElementById('expense-cost').value;

    if (expenseTitle !== '' && expenseCost !== '') {
        const cost = parseFloat(expenseCost);
        totalExpenses += cost;

        const listItem = document.createElement('li');
        listItem.textContent = `${expenseTitle}: $${expenseCost}`;
        document.getElementById('expense-list').appendChild(listItem);

        updateSummary();
    }
}

function updateSummary() {
    document.getElementById('total-budget-value').textContent = totalBudget;
    document.getElementById('total-expenses').textContent = totalExpenses;
    document.getElementById('balance').textContent = totalBudget - totalExpenses;
}
