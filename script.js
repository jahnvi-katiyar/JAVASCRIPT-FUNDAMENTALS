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
let count_age=prompt("enter your age");
if(count_age>=18){
    console.log("you are eligible for voting");
}else{
    console.log("you are not eligible for voting");
}

// a grade calculator based on marks
let count_marks=prompt("enter your marks");
let grade;
if(count_marks>=90){
    grade="A+";
}else if(count_marks>=80){
    grade="A";
}else if(count_marks>=70){
    grade="B+";
}else if(count_marks>=60){
    grade="B";
}else{
    grade="C";
}
console.log(`your grade is ${grade}`);

// a simple calculator
let num1=Number(prompt("enter first number"));
let num2=Number(prompt("enter second number"));
let operator=prompt("enter operator (+,-,*,/)");
if(operator=="+"){
    console.log(`the sum of ${num1} and ${num2} is ${num1+num2}`);
}
else if(operator=="-"){
    console.log(`the difference of ${num1} and ${num2} is ${num1-num2}`)
}
else if(operator=="*"){
    console.log(`the product of ${num1} and ${num2} is ${num1*num2}`)
}
else if(operator=="/"){
    console.log(`the quotient of ${num1} and ${num2} is ${num1/num2}`)
}
else{
    console.log("invalid operator");
}

// switch case statement
let day=prompt("enter a day of the week");
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
}
