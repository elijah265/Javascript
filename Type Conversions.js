//string Conversion
let value = true;
console.log(typeof value)// boolean
value = String(value);
console.log(typeof value);// console.log(typeof value)

// Numeric Conversion
//Numeric conversion in mathematical functions and expressions happens automatically.For example, when division / is applied to non-numbers:
console.log("4" / "2"); // 2, strings are converted to number

// We can use the Number(value) function to explicitly convert a value to a number:
let numString = '12345';
console.log( typeof numString);
let num = Number(numString);
console.log(typeof num) // number


// Boolean Conversion
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean('hello'));// true
console.log(Boolean(''));// false
console.log(Boolean("0"));// true




