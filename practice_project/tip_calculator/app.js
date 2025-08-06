let form = document.querySelector("form");
let total = document.querySelector(".total_amount");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let bill_amount = parseInt(document.querySelector(".bill_amount").value);
  let tip_percentage = parseInt(
    document.querySelector(".tip_percentage").value
  );

  let total_amount = (
    bill_amount +
    bill_amount * (tip_percentage / 100)
  ).toFixed(2);
  total.innerHTML = `${total_amount}$`;
});
