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
  updateIncomes,
  deleteIncomes,
} from "./data.js";

const incomeText = document.getElementById("incomeTitle");
const incomeNumber = document.getElementById("incomeValue");
const expenseText = document.getElementById("expenseTitle");
const expenseNumber = document.getElementById("expenseValue");

incomeText.classList.add(
  "budget__list__form__input",
  "budget__list__form__input--text"
);

incomeNumber.classList.add(
  "budget__list__form__input",
  "budget__list__form__input--number"
);

expenseText.classList.add(
  "budget__list__form__input",
  "budget__list__form__input--text"
);

expenseNumber.classList.add(
  "budget__list__form__input",
  "budget__list__form__input--number"
);

const getTotalIncomes = () => {
  const total = getIncomes().reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return total;
};

const showIncomesList = () => {
  incomesList.innerHTML = "";
  getIncomes().forEach((income) => {
    const li = document.createElement("li");
    const item = document.createElement("Span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const liDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const buttonsDiv = document.createElement("div");

    item.textContent = ` ${income.name}: ${income.amount} PLN`;

    editButton.textContent = "edit";
    deleteButton.textContent = "delete";

    deleteButton.classList.add("delete-background-color");
    editButton.classList.add("edit-background-color");

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.classList.add("buttonsDiv");

    li.classList.add("currItem");

    li.setAttribute("data-income-id", `${income.id}`);

    contentDiv.classList.add("contentDiv");
    contentDiv.appendChild(item);

    li.appendChild(contentDiv);
    li.appendChild(buttonsDiv);

    liDiv.appendChild(li);
    liDiv.classList.add("liDiv");
    incomesList.appendChild(liDiv);

    deleteButton.addEventListener("click", function () {
      const li = document.querySelector(".currItem");
      deleteIncomes(income.id);
    });

    editButton.addEventListener("click", function () {
      const li = document.querySelector(".currItem");

      const modal = document.createElement("div");
      modal.classList = "edit-modal";
      const label = document.createElement("label");
      label.classList.add("label");
      label.textContent = "Edit Income";
      const titleInput = document.createElement("input");
      titleInput.classList.add("tittleInput");
      titleInput.type = "text";
      titleInput.value = income.name;
      const amountInput = document.createElement("input");
      amountInput.classList.add("amountInput");
      amountInput.type = "number";
      amountInput.value = income.amount;

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
        if (titleInput.value == "" || amountInput.value == "") {
          alert("Both fieldes must be filled out");
          return false;
        }
        updateIncomes(titleInput.value, amountInput.value, income.id);
        document.body.removeChild(modal);
      });
      document.body.appendChild(modal);
    });
  });
};

const showTotalIncomes = () => {
  totalIncomes.textContent = getTotalIncomes();
};

const getTotalExpenses = () => {
  const totalExp = getExpenses().reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return totalExp;
};

const showExpensesList = () => {
  expensesList.innerHTML = "";

  getExpenses().forEach((expense) => {
    const li = document.createElement("li");
    const item = document.createElement("Span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const liDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const buttonsDiv = document.createElement("div");

    item.textContent = ` ${expense.name}: ${expense.amount} PLN`;

    editButton.textContent = "edit";
    deleteButton.textContent = "delete";

    deleteButton.classList.add("delete-background-color");
    editButton.classList.add("edit-background-color");

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.classList.add("buttonsDiv");

    li.classList.add("currItem");

    li.setAttribute("data-expense-id", `${expense.id}`);

    contentDiv.classList.add("contentDiv");
    contentDiv.appendChild(item);

    li.appendChild(contentDiv);
    li.appendChild(buttonsDiv);

    liDiv.appendChild(li);
    liDiv.classList.add("liDiv");
    expensesList.appendChild(liDiv);

    deleteButton.addEventListener("click", function () {
      const li = document.querySelector(".currItem");
      deleteExpenses(expense.id);
    });

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
        if (titleInput.value == "" || amountInput.value == "") {
          alert("Both fieldes must be filled out");
          return false;
        }
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
