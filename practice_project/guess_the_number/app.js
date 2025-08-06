let form = document.querySelector("form");
let arr = [];
let remainingNumber = document.querySelector(".Remainingnumber");
let previousNumber = document.querySelector(".previousnumber");
let counter = 10;
let randonNumber = Math.floor(Math.random() * 10 + 1);
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (arr.length < 10) {
    let inputField = parseInt(document.querySelector("#guess_number").value);

    remainingNumber.innerHTML = `${--counter}`;

    arr.push(inputField);
    previousNumber.innerHTML = arr[arr.length - 1];

    if (inputField == randonNumber) {
      randonNumber = Math.floor(Math.random() * 10 + 1);

      alert("congrates you guess the correct number ");
    } else {
      alert("better luck try again");
    }

    document.querySelector("#guess_number").value = "";
  } else {
    alert("your trails are end to play again refresh page");
    return;
  }
});
