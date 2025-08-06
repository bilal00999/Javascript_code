let main_div = document.querySelector(".main_div");
let main = document.querySelector(".main");

main.addEventListener("click", function (e) {
  main_div.style.backgroundColor = e.target.id;
});
