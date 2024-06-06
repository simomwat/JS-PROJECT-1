import {
  incomesForm,
  incomesList,
  totalIncomes,
  expensesForm,
  expensesList,
  totalExpenses,
  totalBalance,
} from "./elements.js";

import { getIncomes, getExpenses } from "./data.js";

const getTotalIncomes = () => {
  const total = getIncomes().reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return total;
};

const showIncomesList = () => {
  incomesList.innerHTML = "";

  getIncomes().forEach((income) => {
    /*
      <li>
        <span> salary: 3000 EUR</span>
        <button>Edit</button>
        <button>Remove</button>
      </li>
    */

    const item = document.createElement("li");
    item.textContent = `${income.name}: ${income.amount} PLN`;

    incomesList.appendChild(item);
  });
};

const showTotalIncomes = () => {
  totalIncomes.textContent = getTotalIncomes();
};

/*====================================================*/

const getTotalExpenses = () => {
  const totalExp = getExpenses().reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return totalExp;
};

const showExpensesList = () => {
  expensesList.innerHTML = "";

  getExpenses().forEach((expense) => {
    /*
        <li>
          <span> salary: 3000 EUR</span>
          <button>Edit</button>
          <button>Remove</button>
        </li>
      */

    const item = document.createElement("li");
    item.textContent = `${expense.name}: ${expense.amount} PLN`;
    expensesList.appendChild(item);
  });
};

const showTotalExpenses = () => {
  totalExpenses.textContent = getTotalExpenses();
};

/*======================ACT ON THIS PART========================================*/

const showTotalBalance = () => {
  totalBalance.textContent = getTotalIncomes() - getTotalExpenses();

  /* const balance = getTotalIncomes() - getTotalExpenses();
  if (balance < 0) {
    balanceStatus.textContent =
      "The balance is negative. You are down" +
      totalBalance.textContent +
      "PLN.";
  } else if ((totalBalance.textContent = 0)) {
    balanceStatus.textContent = "Balance is zero";
  } else {
    balanceStatus.textContent =
      "You can still spend" + totalBalance.textContent + "PLN";
  } */
};

export {
  showIncomesList,
  showTotalIncomes,
  showExpensesList,
  showTotalExpenses,
  showTotalBalance,
};
