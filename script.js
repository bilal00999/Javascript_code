
// var myName='bilal ahmed'
// console.log(myName);

// var age=20;
// console.log(age);
// console.log(typeof age);

// convert Number into string
// var number=20;
// console.log(+number);
// console.log( typeof String(number));
// console.log(typeof number);
// convert string into number
// var Myname='85';
// console.log(Myname);
// console.log(typeof Number(Myname));

// var number1=10;
// var number2=20.5;
// console.log(parseInt(number1));
// console.log(parseFloat(number2));
// console.log(parseFloat(number1));
// console.log(parseInt(number2));

// console.log('part 2');
// myName1='5';
// myName2=5;
// fullName=myName1-myName2;
// console.log(fullName);


// teranary operator 

// var studentScore=59;
// var result=studentScore>=60? "pass" : "fail";
// console.log(result);

// console.log(2<12<5);
// console.log("20"+10+10);

// var age=19;
// var citizen=true;
// var registered=true;
// if(age<18 && citizen==false && registered==false){
//     console.log("you are not eligible to vote");
// }
// else if(age>=18 && citizen==false){
//     console.log("you are not eligible due to citizenship status");
// }
// else if(age>=18 && citizen==true && registered==false){
//     console.log("you are not eligible due to registeration status");
// }else{
//     console.log("you are eligible");
// }

// even number is even or odd
// var number=0;
// if(number%2==0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }

// if(number<0){
//     console.log("negative");
// }else if(number>0){
//     console.log("positive");
// }else{
//     console.log("zero");
// }

// var i=1;
// while(i<=10){
//     var result=5*i;
//     console.log('5 * '+i+' = '+ result);
//     i++;
// }
// var sum=0;
// for(i=1;i<=10;i++){
//     sum=sum+i;
// }
// console.log(sum);

// year=2023;
// if(year%4===0){
//     console.log(year+" year is a leap year ");
// }
// else{
//     console.log("not leap year");
// }
// var pattern;
// for(var i=1;i<=5;i++){
//     var pattern="";
//     for(var j=1;j<=i;j++){
//         pattern=pattern+"*";
//     }
//     console.log(pattern);
// }


// functions
// var sum=0;
// var num1;
// var num2;
// function sumition(num1,num2){
//     return num1+num2;
// }
// sum=sumition(45,98);
// console.log(sum);


// function greeting(name){
//     console.log("hello "+name+" welcome to js course");
// }

// greeting(prompt("enter your name"));
// greeting(prompt("enter your name"));

// function calculator(num1,num2,operator){
//     if(operator=='+'){
//         return num1+num2;
//     }
//     else if(operator=='-'){
//         return num1-num2;
//     }
//     else if(operator=='/'){
//         return num1/num2;
//     }
//     else if(operator=='*'){
//         return num1*num2;
//     }
//     else{
//         console.log("enter operator like +, -, /, *");
//     }
// }
// console.log(calculator(10,5,'+'));
// let name='bilal';
//  name='ahmed';
// console.log(name);



// const sum = (a,b)=> console.log(a+b);
// sum(5,8);

// palindrom

// const palindrom= (str)=>{
//     let reverse="";
//     for(let char=str.length-1; char>=0;char--){
//         reverse=reverse+str[char];
//     }
//     return reverse;
// }
// let str="aqa"
// let result=palindrom(str);
// if(result==str){
//     console.log("string is palindrom")
// }
// else{
//     console.log("string is not palindrom");
// }
// console.log("for each function")
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// let result=numbers.forEach((num,index,arr) => {
//     return `${index} index ${num*2}`;
// });
// console.log(result);


// console.log("map function")
// let result2=numbers.map((num,index,arr)=>{
//     return `${num*2}`;
// });
// console.log(result2);

// splice
// const studentsName=["bilal","ali","hamza","hasan","kashif"];
// studentsName.splice(2,0,"noman");
// console.log(studentsName);

// const months=["jan","march","april","june","july"];
// months.push("Dec");
// months[1]="March";
// months.shift();
// console.log(months.splice());
// console.log(months);


// const products=[
//     {name :"laptop", price : "1200"},
//      {name :"phone", price : "800"},
//       {name :"Tablet", price : "300"},
//        {name :"SmartWatch" ,price :"150"}
// ];

// const result=products.filter((curElm)=>{
//     if(curElm.price<=500){
//         return curElm;
//     }
// });

// console.log(result);

// numbers=[1,2,3,4,5,6,7,8,9,10];

// const squareNumbers=numbers.map((curElm)=>{
//     if(curElm%2==0){
//     return curElm*curElm;
//     }
// });
// const squareNumbers2=squareNumbers.filter((curElm)=>{
//     return curElm>0;
// });
// console.log(squareNumbers2);

// myName=["bilal","ali","noman","uzair","izhar","asad","rehman","huzaifa","rana"];

// const result=myName.map((curElm)=>{
//     return "Mrs "+curElm;
// });
// console.log(result);
// result=numbers.reduce((accum,curElm)=>{
//     return accum+curElm;
// } ,0);
// console.log(result);

// let text="hi i am bilal ahmed";
// console.log(text.replace("a","k"));

// function printCharacter(){
//     for(char=97;char<=122;char++){
//         console.log(String.fromCharCode(char));
//     }
// }
// printCharacter();
// let count=0;
// function countVowels(para){
//     const vowels="aeiou";
//     for(item of para){
//        if(vowels.includes(item)){
//           count=count+1;
//        }
//     }
//     return count;

// }
// let para="hi my name is bilal ahmed i am a front end developer";
// console.log(countVowels(para));

// math objects

// console.log(Math.round(-10.6));
// console.log(Math.ceil(10.5));

// console.log(Math.trunc(-5.5));

// console.log(Math.trunc(Math.random()*100+1));

// let tryAgain;
// let userInput;
// let randomNumber;
// do{
//    randomNumber=Math.trunc(Math.random()*10);
//    console.log(randomNumber);
//     userInput=prompt("enter a any number between 1 to 1000");
//    if(userInput==randomNumber){
//       alert("Congrats you guess correct number");
//    }
//    else{
//       alert("Better luck next time");
//    }

//    tryAgain=prompt("Do you want try again press 'y' or 'Y' otherwise 'n'");

// }while((tryAgain ==='y'||tryAgain==='Y'));


