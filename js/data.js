import {
  showExpensesList,
  showTotalBalance,
  showTotalExpenses,
} from "./income-helpers.js";

const incomes = [];
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

/*const updateExpenses = (id, name, amount) => {
  expenses.push({
    name,
    amount: Number(amount),
    id,
  });
};*/

const updateExpenses = (newName, newAmount, expenseId) => {
  // Debug: Log the initial state of expenses
  console.log("Initial Expenses:", expenses);

  // Use map to create a new array with the updated expense
  const newExpenses = expenses.map((expense) => {
    // Debug: Log each expense being processed
    console.log(`Processing expense with ID: ${expense.id}`);
    console.log(`Processing new expense with ID: ${expenseId}`);
    /*expense.id === expenseId
      ? { ...expense, name: newName, amount: newAmount }
      : expense*/
    if (expense.id === expenseId) {
      console.log(`Updating expense with ID: ${expense.id}`);
      console.log(`Old Name: ${expense.name}, New Name: ${newName}`);
      console.log(`Old Amount: ${expense.amount}, New Amount: ${newAmount}`);
      return { ...expense, name: newName, amount: Number(newAmount) };

      //expense.name = newName;
      //expense.amount = newAmount;
    }

    return expense;
  });

  console.log("New Amount:", newAmount);
  console.log("New Name:", newName);
  console.log("Before Update:", expenses);
  console.log("After Update:", newExpenses);

  expenses = newExpenses;
  // Debug: Log the final state of expenses
  console.log("Final Updated Expenses:", expenses);

  showExpensesList();
  showTotalExpenses();
  showTotalBalance();
};

/*================Dev Delete======================================*/

const deleteExpenses = (expenseId) => {
  const modifiedExpenses = expenses.find((expense) => {
    if (expense.id === expenseId) {
      console.log(`Deleting expense with ID: ${expense.id}`);
      expense.remove;
    }

    return expense;
  });
};

//showExpensesList();
//showTotalExpenses();
// showTotalBalance();
//};

export {
  getIncomes,
  addIncome,
  getExpenses,
  addExpenses,
  updateExpenses,
  deleteExpenses,
};
