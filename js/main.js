import { addIncome } from "./data.js";
import { addExpenses } from "./data.js";
import { updateExpenses } from "./data.js";
import { incomesForm } from "./elements.js";
import { expensesForm } from "./elements.js";
import {
  showIncomesList,
  showTotalIncomes,
  showExpensesList,
  showTotalExpenses,
  showTotalBalance,
} from "./income-helpers.js";

incomesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.incomeName.value;
  const amount = event.target.incomeAmount.value;
  addIncome(name, amount);

  event.target.reset();

  showIncomesList();
  showTotalIncomes();
  showTotalBalance();
});

expensesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.expensesName.value;
  const amount = event.target.expenseAmount.value;
  addExpenses(name, amount);

  event.target.reset();

  showExpensesList();
  showTotalExpenses();
  showTotalBalance();
});

//const updateButton = document.getElementById("updateButton");
//updateButton.addEventListener("button", (event) => {
document.getElementById("updateButton").addEventListener("click", (event) => {
  event.preventDefault();
  const newName = document.getElementById("expenseTitle").value;
  const newAmount = document.getElementById("expenseValue").value;
  const expenseId = document
    .querySelector("#expensesList > li")
    .getAttribute("data-expense-id");
  //const name = event.target.expensesName.value;
  //const amount = event.target.expenseAmount.value;
  //const id = event.target.expense.id;
  //addExpenses(name, amount);
  updateExpenses(newName, newAmount, expenseId);

  //event.target.reset();
  document.getElementById("expensesForm").reset();
  showExpensesList();
  showTotalExpenses();
  showTotalBalance();
});
