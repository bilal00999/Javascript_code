let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let category = document.querySelector("#categeory");
let date = document.querySelector("#date");
let clearBtn = document.querySelector(".clear_btn");
let addExpenseBtn = document.querySelector(".add_expense_btn");
let tableBody = document.querySelector(".table_body");
let viewAllBtn = document.querySelector(".view_all_btn");
let expenses = document.querySelector(".e_t_b_amount");

window.addEventListener("DOMContentLoaded", () => {
  let savedItems = JSON.parse(localStorage.getItem("expense")) || [];

  showTotalExpenses();

  // Show only last 3 by default
  let recentItems = savedItems.slice(-3); // gets last 3 items
  recentItems.forEach((item) => {
    showTable(item.description, item.amount, item.category, item.date);
  });
});

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let desc = description.value;
  let price = amount.value;
  let cate = category.value;
  let dates = date.value;

  showTable(desc, price, cate, dates);

  let newRow = {
    description: desc,
    amount: price,
    category: cate,
    date: dates,
  };
  let tableArray = JSON.parse(localStorage.getItem("expense")) || [];
  tableArray.push(newRow);
  localStorage.setItem(`expense`, JSON.stringify(tableArray));

  showTotalExpenses();

  // Clear input fields
  description.value = "";
  amount.value = "";
  category.value = "";
  date.value = "";

  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    description.value = "";
    amount.value = "";
    category.value = "";
    date.value = "";
  });
});

function showTable(desc, price, cate, dates) {
  let tableRow = document.createElement("tr");
  tableRow.setAttribute("class", "body_row");
  tableRow.innerHTML = ` 
                  <td>${desc}</td>
                  <td>$${price}</td>
                  <td>${cate}</td>
                  <td>${dates}</td>
                  <td>
                    <span class="material-icons delete-icon">delete</span>
                  </td>
                `;

  tableBody.appendChild(tableRow);
}

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-icon")) {
    let row = e.target.closest("tr");

    let deleteDesc = row.children[0].textContent;

    let savedItems = JSON.parse(localStorage.getItem("expense")) || [];

    console.log(savedItems[0].price);

    let updatedItems = savedItems.filter(
      (item) => item.description !== deleteDesc
    );

    console.log(updatedItems);
    localStorage.setItem("expense", JSON.stringify(updatedItems));

    showTotalExpenses();

    row.remove();
  }
});

viewAllBtn.addEventListener("click", () => {
  tableBody.innerHTML = "";

  let allItems = JSON.parse(localStorage.getItem("expense")) || [];

  allItems.forEach((item) => {
    showTable(item.description, item.amount, item.category, item.date);
  });
});

function showTotalExpenses() {
  let totalamount = 0;
  let savedItems = JSON.parse(localStorage.getItem("expense"));
  savedItems.forEach((item) => {
    totalamount = totalamount + Number(item.amount);
  });
  expenses.textContent = `$${totalamount}`;
}
