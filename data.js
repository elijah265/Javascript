/*
//Numbars:The number type represents both integer and floating point numbers.

let number = 1234;
console.log(number);

console.log(typeof number);

//Infinity:Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

let infinity = 1/0;
console.log(infinity);
console.log(typeof infinity);
//NAN: represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
let Nan = 'Boy' / 5; // NaN
console.log(Nan); // NaN

console.log(2 * NaN); //NaN is sticky. Any further mathematical operation on NaN returns NaN:
console.log(NaN +1); // NaN
// one exception to NaN:
console.log(NaN ** 0); // 1

//strings:A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'single quotes';
let phrase = `can embed another ${str}`;
console.log(str); // Hello
console.log(str2); // single quotes
console.log(typeof str2);//string
console.log(typeof str);//string
console.log(typeof phrase);//string

console.log(phrase); // can embed another Hello
/*In JavaScript, there are 3 types of quotes.
Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`. */


//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

/*
let NAME = 'peter';
console.log(`Hello, ${NAME}!`); // Hello, Peter!
console.log(`the result is ${1+4}`);// the result is 5
console.log("the result is ${1+4}");

//Boolean data type:The boolean type has only two values: true and false.
let nameFieldChecked = true;
let ageFieldChecked = false;
console.log(nameFieldChecked);// true
console.log(ageFieldChecked);//false
console.log(typeof nameFieldChecked);
//Boolean values also come as a result of comparisons:
let isGreater = 5 >4;//true
console.log(isGreater);//true

// The null value
let age = null;
console.log(age);// null
// The undefined value:The meaning of undefined is “value is not assigned”.
let Age;
console.log(Age);// undefine
console.log(typeof Age);

//Biglnt:In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

console.log(9007199254740991 +1);//9007199254740992
console.log(typeof 9007199254740991 +1);//number1
*/