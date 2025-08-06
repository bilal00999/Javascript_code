// let pr = new Promise((resolve, reject) => {
//   let num = 5;
//   if (num % 2 === 0) {
//     resolve(`${num} is even number`);
//   } else {
//     reject(`${num} is a odd number`);
//   }
// });

// pr.then((res) => {
//   console.log(res);
// })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     console.log("promise complete");
//   });

// promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 1");
//   }, 6000);
// });

// promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 2");
//   }, 4000);
// });

// promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 3");
//   }, 5000);
// });

// promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise 3 failed");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     console.log("all promise complete");
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     console.log("all promise complete");
//   });

// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     console.log("all promise complete");
//   });

let api_body = document.querySelector(".api_body");
let fetchBtn = document.querySelector(".fetchbtn");
// const api = "https://icanhazdadjoke.com/";
// const fetchApi = () => {
//   fetch(api, {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       api_body.innerHTML = data.joke;
//     })
//     .catch((rej) => {
//       console.log(rej);
//     });
// };

// const api = "https://icanhazdadjoke.com/";
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
async function fetchData(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const res = await fetch(api);
    let data = await res.json();
    console.log(data);
    api_body.innerHTML = data.joke;
  } catch (err) {
    api_body.innerHTML = `api not work`;
  }
}
fetchData("karachi");
// fetchBtn.addEventListener("click", );
