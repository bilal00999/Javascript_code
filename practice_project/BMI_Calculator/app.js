let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector(".result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `enter valid number ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `enter valid number ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    result.innerHTML = `BMI EQUAL TO ${bmi}`;
  }
});
