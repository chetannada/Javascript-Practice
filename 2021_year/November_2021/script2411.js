// 10 days of Javascript Tutorial in Hackerrank

// 4 Ways to Convert String to Character Array in JavaScript

// 1st method
const string = "character";
const method1 = string.split("");
console.log(method1);

// 2nd method
const method2 = [...string];
console.log(method2);

// 3rd method
const method3 = Array.from(string);
console.log(method3);

//4th method
const method4 = Object.assign([], string);
console.log(method4);

// Day 3: Try, Catch, and Finally
function reverseString(s) {
  if (typeof s === "string") {
    console.log(s.split("").reverse().join(""));
  } else {
    console.log("s.split is not a function" + "\n" + s);
  }
}
reverseString('123456789');
