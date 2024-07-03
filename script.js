// script.js
document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const budgetForm = document.getElementById('budget-form');
    const budgetValue = document.getElementById('budget-value');
    const expensesValue = document.getElementById('expenses-value');
    const remainingValue = document.getElementById('remaining-value');
    const expensesList = document.getElementById('expenses-list');

    let budget = 0;
    let expenses = 0;
    let expensesArray = [];

    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        budget = parseFloat(document.getElementById('budget-amount').value);
        updateSummary();
    });

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
        expensesArray.push({ name: expenseName, amount: expenseAmount });
        expenses += expenseAmount;
        addExpenseToList(expenseName, expenseAmount);
        updateSummary();
    });

    function updateSummary() {
        budgetValue.textContent = budget.toFixed(2);
        expensesValue.textContent = expenses.toFixed(2);
        remainingValue.textContent = (budget - expenses).toFixed(2);
    }

    function addExpenseToList(name, amount) {
        const li = document.createElement('li');
        li.textContent = `${name}: $${amount.toFixed(2)}`;
        expensesList.appendChild(li);
    }
});

