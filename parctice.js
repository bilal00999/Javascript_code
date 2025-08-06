// template literals

// let a,b,sum=0;
// a=10;
// b=5;
// sum=a+b;
// console.log(`sum of ${a} + ${b} = ${sum}`);

// default arrguments

// function sumTwoNumbers(a=5,b=5){
//     let sum=a+b;
//     console.log(sum);
// }
// sumTwoNumbers(10);
// const studentsName=["bilal","ali","hamza","hasan","kashif"];
// studentsName.splice(1,3,"noman","izhar","huzaifa");
// console.log(studentsName);

// let num=32243;
// let result=0;
// let i=1;
// while(i<=5){
//     result=num%10;
//     console.log(result);
//     num=parseInt((num%10)/10);
//     i++;
// }

// function reverseNumber(x){
//     let reversed=0;
//     while(x>0){
//         result=x%10;
//         reversed=reversed*10+result;
//         x=Math.floor(x/10);
//     }
//     return reversed;
// }

// let answer=reverseNumber(32243);
// console.log(answer);

// function palindrom(str){
//     let reversStr=str.split('').reverse().join('');
//     console.log(reversStr);

//     if(str==reversStr){
//         console.log("string is palindrom");

//     }
//     else{
//         console.log("sring is not palindrom");

//     }
// }

// palindrom("ana");

// function printMessage(x){
//     console.log("hi "+x);
// }
// let innfinite=setInterval(()=>printMessage(5),2000);
// clearTimeout(innfinite);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 64, 76, 34, 98];
const result = arr.findIndex((curElm) => {
  return curElm > 20;
});
console.log(result);

const select = arr.sort((a, b) => {
  if (a > b) return -1; //switch the order
  if (b > a) return 1; // keep the order
});
console.log(select);

// console.log(arr.includes("b"));
