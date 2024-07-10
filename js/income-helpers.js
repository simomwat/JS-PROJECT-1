import {
  incomesForm,
  incomesList,
  totalIncomes,
  expensesForm,
  expensesList,
  totalExpenses,
  totalBalance,
  balanceStatus,
} from "./elements.js";

import {
  getIncomes,
  getExpenses,
  updateExpenses,
  deleteExpenses,
} from "./data.js";

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

    const li = document.createElement("li");
    const item = document.createElement("Span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    //const itemID = `${expense.id}`;
    //item.textContent = itemID + `: ${expense.name}: ${expense.amount} PLN`;
    item.textContent = `${expense.id}: ${expense.name}: ${expense.amount} PLN`;

    editButton.textContent = "edit";
    deleteButton.textContent = "delete";

    deleteButton.classList.add("delete-background-color");
    editButton.classList.add("edit-background-color");
    //item.classList.add("currItem");
    //editButton.classList.add("currItem");
    // deleteButton.classList.add("currItem");

    li.classList.add("currItem");
    //li.id = `${expense.id}`;
    li.setAttribute("data-expense-id", `${expense.id}`);

    li.appendChild(item);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    li.classList.add("flex2");
    expensesList.appendChild(li);

    /*================Dev Delete======================================*/

    deleteButton.addEventListener("click", function () {
      const li = document.querySelector(".currItem");
      deleteExpenses();
      expensesList.removeChild(li);
    });
    /*================Dev Delete======================================*/

    editButton.addEventListener("click", function () {
      const li = document.querySelector(".currItem");

      const modal = document.createElement("div");
      modal.classList = "edit-modal";
      const label = document.createElement("label");
      label.classList.add("label");
      label.textContent = "Edit Expense";
      const titleInput = document.createElement("input");
      titleInput.classList.add("tittleInput");
      titleInput.type = "text";
      titleInput.value = expense.name;
      const amountInput = document.createElement("input");
      amountInput.classList.add("amountInput");
      amountInput.type = "number";
      amountInput.value = expense.amount;

      const closeButton = document.createElement("button");
      closeButton.classList.add("closeButton");
      closeButton.textContent = "Cancel";

      const saveChangesButton = document.createElement("button");
      saveChangesButton.classList.add("saveButton");
      saveChangesButton.textContent = "Save";

      modal.appendChild(label);
      modal.appendChild(titleInput);
      modal.appendChild(amountInput);
      modal.appendChild(saveChangesButton);
      modal.appendChild(closeButton);

      closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
      });

      saveChangesButton.addEventListener("click", () => {
        updateExpenses(titleInput.value, amountInput.value, expense.id);
        document.body.removeChild(modal);
      });
      document.body.appendChild(modal);
    });
  });
};

const showTotalExpenses = () => {
  totalExpenses.textContent = getTotalExpenses();
};

const showTotalBalance = () => {
  totalBalance.textContent = getTotalIncomes() - getTotalExpenses();

  const balance = getTotalIncomes() - getTotalExpenses();
  if (balance < 0) {
    balanceStatus.textContent =
      "The balance is negative. You are down " +
      totalBalance.textContent +
      " PLN.";
  } else if (balance === 0) {
    balanceStatus.textContent = "Balance is zero";
  } else {
    balanceStatus.textContent =
      "You can still spend " + totalBalance.textContent + " PLN";
  }
};

export {
  showIncomesList,
  showTotalIncomes,
  showExpensesList,
  showTotalExpenses,
  showTotalBalance,
};
