const quiz = [
  {
    question:
      "1. Which of the following is used to declare a constant in JavaScript?",
    option1: "const",
    option2: "let",
    option3: "var",
    option4: "constant",
    answer: "const",
  },
  {
    question: "2. What does NaN stand for in JavaScript?",
    option1: "Not a Null",
    option2: "Not a Name",
    option3: "Not a Number",
    option4: "Name as Number",
    answer: "Not a Number",
  },
  {
    question:
      "3. Which symbol is used for strict equality comparison in JavaScript?",
    option1: "=",
    option2: "==",
    option3: "===",
    option4: "!==",
    answer: "===",
  },
  {
    question:
      "4. What is the result of this code? console.log(typeof undefined);",
    option1: "null",
    option2: "undefined",
    option3: "object",
    option4: "string",
    answer: "undefined",
  },
  {
    question:
      "5. Which method converts a JSON string into a JavaScript object?",
    option1: "JSON.toObject()",
    option2: "JSON.parse()",
    option3: "JSON.stringify()",
    option4: "JSON.objectify()",
    answer: "JSON.parse()",
  },
];

let questions = document.querySelector(".question");
let para = document.querySelectorAll(".option");
let submit_btn = document.querySelector(".submit_btn");
let maindiv = document.querySelector(".quiz_app");
let index = 0;
let total = quiz.length;
let right = 0;
let wrong = 0;
function loadQuiz() {
  reset();
  questions.innerHTML = quiz[index].question;
  para[0].value = quiz[index].option1;
  para[0].nextElementSibling.innerHTML = `${quiz[index].option1}`;
  para[1].value = quiz[index].option2;
  para[1].nextElementSibling.innerHTML = `${quiz[index].option2}`;
  para[2].value = quiz[index].option3;
  para[2].nextElementSibling.innerHTML = `${quiz[index].option3}`;
  para[3].value = quiz[index].option4;
  para[3].nextElementSibling.innerHTML = `${quiz[index].option4}`;
}

submit_btn.addEventListener("click", function (e) {
  submitQuiz();
});

function reset() {
  para.forEach((ele) => {
    ele.checked = false;
  });
}

function showResult() {
  maindiv.innerHTML = `<h1>${right} / ${total} correct answer</h1>
  <p>${
    right === total ? "Excellent!" : right >= 3 ? "Good job!" : "Try again."
  }</p>`;
}

function submitQuiz() {
  const ans = getAnswer();
  if (!ans) {
    alert("Please select an option before submitting.");
    return;
  }
  if (ans == quiz[index].answer) {
    right++;
  } else {
    wrong++;
  }

  index++;
  if (index < total) {
    loadQuiz();
  } else {
    showResult();
  }
}
function getAnswer() {
  for (let opt of para) {
    if (opt.checked) {
      return opt.value;
    }
  }
}
loadQuiz();
