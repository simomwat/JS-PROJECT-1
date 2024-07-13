import {
  showIncomesList,
  showExpensesList,
  showTotalBalance,
  showTotalIncomes,
  showTotalExpenses,
} from "./income-helpers.js";

let incomes = [];
let expenses = [];

const getIncomes = () => {
  return incomes;
};

const getExpenses = () => {
  return expenses;
};

const addIncome = (name, amount) => {
  incomes.push({
    name,
    amount: Number(amount),
    id: Math.random(),
  });
};

const addExpenses = (name, amount) => {
  expenses.push({
    name,
    amount: Number(amount),
    id: Math.random().toString(),
  });
};

const renderIncomes = () => {
  showIncomesList();
  showTotalIncomes();
  showTotalBalance();
};

const updateIncomes = (newName, newAmount, incomeId) => {
  const newIncomes = incomes.map((income) => {
    if (income.id === incomeId) {
      return { ...income, name: newName, amount: Number(newAmount) };
    }

    return income;
  });

  incomes = newIncomes;

  renderIncomes();
};

const deleteIncomes = (incomeId) => {
  const indexToRemove = incomes.findIndex((income) => income.id === incomeId);
  incomes.splice(indexToRemove, 1);
  renderIncomes();
};

const renderExpenses = () => {
  showExpensesList();
  showTotalExpenses();
  showTotalBalance();
};

const updateExpenses = (newName, newAmount, expenseId) => {
  const newExpenses = expenses.map((expense) => {
    if (expense.id === expenseId) {
      return { ...expense, name: newName, amount: Number(newAmount) };
    }

    return expense;
  });

  expenses = newExpenses;

  renderExpenses();
};

const deleteExpenses = (expenseId) => {
  const indexToRemove = expenses.findIndex(
    (expense) => expense.id === expenseId
  );
  expenses.splice(indexToRemove, 1);
  renderExpenses();
};

export {
  getIncomes,
  addIncome,
  getExpenses,
  addExpenses,
  updateExpenses,
  updateIncomes,
  deleteExpenses,
  deleteIncomes,
};
