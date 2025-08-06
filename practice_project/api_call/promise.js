// promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = false;
//     if (!error) {
//       resolve({ username: "bilal ahmed", age: "19" });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 1000);
// });

// promiseOne
//   .then(function (res) {
//     console.log(res);
//     return res.username;
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("finnaly code complete");
//   });

// // Promise using async await

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = false;
//     if (!error) {
//       resolve({
//         username: "bilal00999",
//         password: "012930483",
//         account: "github",
//       });
//     } else {
//       reject("something wentt wrong");
//     }
//   }, 1000);
// });

// async function handlePromise() {
//   try {
//     const res = await promiseTwo;
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }

// handlePromise();
fetch("https://api.github.com/users/bilal00999")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
