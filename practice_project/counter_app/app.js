let counter = document.querySelector(".counter");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let reset = document.querySelector(".reset");
let counterValue = 0;

increment.addEventListener("click", function () {
  if (counterValue >= -1) {
    counterValue = counterValue + 1;
    counter.innerHTML = `${counterValue}`;
  }
});
decrement.addEventListener("click", function () {
  if (counterValue >= 0) {
    counterValue = counterValue - 1;
    counter.innerHTML = `${counterValue}`;
  }
});
reset.addEventListener("click", function () {
  counterValue = 0;
  counter.innerHTML = counterValue;
});
