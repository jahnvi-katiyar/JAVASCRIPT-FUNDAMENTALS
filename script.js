// let name="jahnvi katiyar"    //declaration of variable for a block scope .
// let age=18;
// let marks=90;
// console.log(`name is ${name} ,age is ${age} and marks is ${marks}`);
// console.log(typeof name);  // string
// console.log(typeof age);   // number
// console.log(typeof marks); // number

// // const person="older";
// // const person="younger";
// // console.log(person);  // error because we cannot redeclare a constant variable.

// var city="lucknow";
// var city="lucknow";
// console.log(city);   // in case of var we can declare the variable again and again.
// console.log(typeof city);  // string

// let a=prompt("enter a number");
// let b=prompt("enter another number");
// console.log(a+b);  // it will concatenate the two numbers because prompt takes input as string.
// console.log(Number(a)+Number(b));  // it will add the two numbers because we are converting them to numbers.

// console.info("use for information");
// console.warn("use for warning");
// console.error("use for error");

//conditional statements
 
// voting criteria
// let count_age=prompt("enter your age");
// if(count_age>=18){
//     console.log("you are eligible for voting");
// }else{
//     console.log("you are not eligible for voting");
// }

// a grade calculator based on marks
// let count_marks=prompt("enter your marks");
// let grade;
// if(count_marks>=90){
//     grade="A+";
// }else if(count_marks>=80){
//     grade="A";
// }else if(count_marks>=70){
//     grade="B+";
// }else if(count_marks>=60){
//     grade="B";
// }else{
//     grade="C";
// }
// console.log(`your grade is ${grade}`);

// a simple calculator
// let num1=Number(prompt("enter first number"));
// let num2=Number(prompt("enter second number"));
// let operator=prompt("enter operator (+,-,*,/)");
// if(operator=="+"){
//     console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`);
// }
// else if(operator=="-"){
//     console.log(`the difference of ${num1} and ${num2} is ${num1-num2}`)
// }
// else if(operator=="*"){
//     console.log(`the product of ${num1} and ${num2} is ${num1*num2}`)
// }
// else if(operator=="/"){
//     console.log(`the quotient of ${num1} and ${num2} is ${num1/num2}`)
// }
// else{
//     console.log("invalid operator");
// }

// switch case statement
// let day=prompt("enter a day of the week");
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
// }

//loops  in javascript


//sum on numbers from 1 to n from for loop
// let num=prompt("enter a number");
// let sum=0;
// for(let i=1;i<=num;i++){
//     sum+=i;
// }
// console.log(`the sum of numbers from 1 to ${num} is ${sum}`);


// //print n numbers using while loop
// let num1=prompt("enter a number");
// let i=1;
// while(i<=num1){
//     console.log(i);
//     i++;
// }


// //print number using do while loop
// let num2=prompt("enter a number");
// let j=1;
// do{
//     console.log(j);
//     j++;
// }while(j<=num2);



// //functions in javascript

// function MyName(name){
//     console.log(name);
// }
// MyName("jahnvi katiyar");


// // sum using function
//  function sum1(a,b){
//     console.log(a+b);
//  }
//  sum1(10,67);


//  //arrow function
//  const sum2=(a,b) => console.log(a+b);
//  sum2(96,64);

 
//  //forEach loop
//  let arr=[1,2,3,4,5];
//  arr.forEach(function printval(val){
//     console.log(val)
//  });


// arrays in javascript

//map in array

// let num=[1,4,6,3];
//  let sq=num.map((val)=>{
//   return val*val;
// });
// console.log(sq);
// console.log(num);


// //filter in array

// let arr=[1,2,3,4,5,6,7,8,9,0,];

// let oddArray=arr.filter((val)=>{
//   return val%2!==0;
// })
// console.log(oddArray);
// console.log(arr);

// //filter out marks of student that score 90+

// let marks=[23,99,45,67,89,90,99,100];
// let topper=marks.filter((val)=>{
//   return val>=90;
// })
// console.log(topper);


// // reduce in array

// let arr1=[1,2,3,4,5];
// let sum=arr1.reduce((res,val)=>{
//   return res+val;     
// })
// console.log(`sum of array1 is ${sum}`);

// //largest no. using reduce

// let arr3=[2,5,7,43,57,34,98];
//  let largest=arr3.reduce((res,curr)=>{
//   return res>curr ? res : curr;
// });
// console.log(`largest no is ${largest}`);


// //factorial of n numbers

// let input=prompt("enter a number");
// let arr4=[];
// for(let i=1;i<=input;i++){
//   arr4[i-1]=i;
// }
// console.log(arr4);

// let fact=arr4.reduce((res,val)=>{
//   return res*val;
// })
// console.log(`factorial of arr is ${fact}`);

// mini project 

// const students =[
//  {name:"aman",marks:85},
//  {name:"riya",marks:42},
//  {name:"karan",marks:67},
//  {name:"sneha",marks:30},
//  {name:"rahul",marks:90}
// ];

// let table=document.getElementById("table");

// students.forEach(function(student){
//   table.innerHTML +=
//   "<tr>"+
//   "<td>"+ student.name +"</td>" +
//   "<td>"+ student.marks +"</td>" +
//   "</tr>";
// });


// // // retriving the students who get marks above 50 using filter

// // const topper=students.filter(function(student){
// //   return student.marks >50;
// // });
// // console.log(topper);


// // // creating new array with only names in uppercase

// // const NAMES= students.map(function(val){
// //   return val.name.toUpperCase();
// // });
// // console.log(NAMES)


// // // find the average marks using reduce

// // const total= students.reduce(function(res,val){
// //   return res+val.marks;
// // }, 0);
// // const avg = total/students.length;
// // console.log(avg)


// // //print each student marks using forEach

// // students.forEach(function(student){
// //   console.log(`${student.name} scored ${student.marks} marks in exam`);
// // });


// // variables

// let a= 10;
// let b=20;
// a=b;
// console.log(a)

// const PI=3.14;
// console.log(PI) ;   // we cannot change or update the the const value

// // var have global scope , we can change it. update it.
// // let have block scope , we cannot change it. but update it .
// // in case of const , we cannot change it or cannot update it.

// console.log( typeof 42 );  //number
// console.log( typeof "jahnvi"); //string
// console.log( typeof true); //boolean
// console.log( typeof null ); //object
// console.log( typeof undefined); //undefined
// console.log( typeof {name:"jahnvi"}); //object
// console.log( typeof [1,3,5]); //object
// console.log( typeof {}); //object
// console.log( typeof []); //object

// console.log(10+5);
// console.log(10-5);
// console.log(10*5);
// console.log(10/5);
// console.log(10%5);
// console.log(10**5);

// let num= 5;
// console.log(++num); // pre increment
// console.log(num++); // post increment
// console.log(--num); //pre decrement
// console.log(num--); //post decrement

// console.log(8=="8")
// console.log(8==="8")
// console.log(8!=="8")
// console.log(8!="8")


// // type conversion

// console.log(typeof Number("25"));
// console.log(typeof String(100));
// console.log(typeof Boolean(1));
// console.log(typeof Boolean("hello"));

// // Grade calculator

// let marks= Number(prompt("enter a number"));
// let grade;
// if (marks>=90){
//   grade="A";
// }else if (90>marks && marks>=75){
//   grade="B";
// }else{
//   grade="C";
// }console.log(grade);

// // age eligibility checker

// let age=Number(prompt("enter a age"));
// let creat;
// if(age>18){
//   cret="younger";
// }
// else if(65>age && age>18){
//   cret="adult";
// }
// else{
//   cret="older";
// }
// console.log(cret);

// electicity bill calculator

// let units=Number(prompt("enter a electricity bill"));
// let rate;
// if (unit<=100){
//   rate=5;
// }else if(unit<=200){
//   rate=7;
// }else{
//   rate=10;
// }

// let bill = units*rate;
// console.log(`bill is ${bill}`);


//switch
// let day=prompt("enter a day");
// day=Number.parseInt(day);
//   switch(day){
//     case 1:
//     console.log("monday");
//     break;
//     case 2:
//     console.log("tuesday");
//     break;
//     default:
//     console.log("write again");
//     break;
// }

// // number is divisible by 2 and 3 

// let num=Number(prompt("enter a number"));
// if(num%2==0 && num%3==0){
//   console.log("number is divisible by both");
// }
// else{
//   console.log("not");
// }


// // for loops 

// let sum=0;
// let n=prompt("enter a number");
// n=Number.parseInt(n)
// for(let i=0; i<n; i++){
//   sum+=(i+1);
// }
// console.log(sum);

// //for in loop
// let marks={
//   jahnvi:27,
//   akshara:36,
//   arya:67,
//   sejal:86
// }
// for(let val in marks){
//   console.log("marks of "+ val + " is " + marks[val]);
// }

// // for of loop

// for(let x of "jahnvi"){
//   console.log(x);
// }

// //while loop 

// let p= Number(prompt("enter a number"));
// let i=0;
// while(i<p){
//    console.log(i);
//    i++;
// }

// //do while loop

// let f=Number(prompt("enter a number"));
// let j=0;
// do{
//   console.log(i);
//   i++;
// }while(i<f)


// //functions in javascript

// function MyName(name){
//     console.log(name);
// }
// MyName("jahnvi katiyar");


// // sum using function
//  function sum1(a,b){
//     console.log(a+b);
//  }
//  sum1(10,67);


// //arrow function
//  const sum2=(a,b) => console.log(a+b);
//  sum2(96,64);

//  const mult=(x,y)=> console.log(x*y);
//  mult(45,735);

// //map in array

// let num=[1,4,6,3];
//  let sq=num.map((val)=>{
//   return val*val;
// });
// console.log(sq);
// console.log(num);


// const students =[
//  {name:"ram",marks:76},
//  {name:"rey",marks:49},
//  {name:"dev",marks:87},
//  {name:"ruh",marks:30},
//  {name:"rishi",marks:90}
// ];

// //filter
// const topper=students.filter(function(student){
//   return student.marks >50;
// });
// console.log(topper);

// //forEach
// students.forEach(function(student){
//   console.log(`${student.name} scored ${student.marks} marks in exam`);
// });

// //reduce
// const total= students.reduce(function(res,val){
//   return res+val.marks;
// }, 0);
// const avg = total/students.length;
// console.log(`average of student ${avg}`)

//select by class

// let head=document.getElementsByClassName("heading");
// console.dir(head)

// //select by id

// let butt=document.getElementById("buttonId");
// console.dir(butt);

// //select by tag

// let para=document.getElementsByTagName("p");
// console.log(para);

// //quick selector

// let quickhead=document.querySelector(".heading");
// console.dir(quickhead);

// let quickhead2=document.querySelectorAll(".heading");
// console.dir(quickhead2);

// let quickbutt=document.querySelector("#buttonId");
// console.dir(quickbutt);

// let quickpara=document.querySelector("p");
// console.dir(quickpara);

// let quickpara2=document.querySelectorAll("p");
// console.dir(quickpara2);


// let btn1=document.querySelector("#btn1");
// btn1.ondblclick=()=>{
//     console.log("hello guys");
//     alert("double click button activate");
// }

// //event

// let btn2=document.querySelector("#btn2");
// btn2.onclick=(evt)=>{
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX,evt.clientY);
// };

// //eventlistener

// let btn3=document.querySelector("#btn2");
// btn3.addEventListener("click",()=>{
//   console.log("button is clicked");
// });


// toggle mode

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";

modebtn.addEventListener("click",() =>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");       
    }
    console.log(currMode);
});
