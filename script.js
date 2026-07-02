let name="jahnvi katiyar"    //declaration of variable for a block scope .
let age=18;
let marks=90;
console.log(`name is ${name} ,age is ${age} and marks is ${marks}`);
console.log(typeof name);  // string
console.log(typeof age);   // number
console.log(typeof marks); // number

// const person="older";
// const person="younger";
// console.log(person);  // error because we cannot redeclare a constant variable.

var city="lucknow";
var city="lucknow";
console.log(city);   // in case of var we can declare the variable again and again.
console.log(typeof city);  // string

let a=prompt("enter a number");
let b=prompt("enter another number");
console.log(a+b);  // it will concatenate the two numbers because prompt takes input as string.
console.log(Number(a)+Number(b));  // it will add the two numbers because we are converting them to numbers.

console.info("use for information");
console.warn("use for warning");
console.error("use for error");