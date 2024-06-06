const incomes = [];
const expenses = [];

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
    id: Math.random(),
  });
};
export { getIncomes, addIncome, getExpenses, addExpenses };
