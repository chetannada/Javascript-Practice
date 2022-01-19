// https://www.hackerrank.com/domains/algorithms

// destructuring assignment in javascript
let person = { 
    name: "Chetan", 
    age: 30, 
    country: "India" 
};
const { name, age } = person;

console.log(name);
//expected output: "Chetan"

console.log(age);
//expected output: 30

// console.log(country);
//expected output: Uncaught ReferenceError: country is not defined

// simple example with array-------------------------------
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

const num = [1,2,3,4,5];
const [one, two, three] = num;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Ternary Operator
// if else
const x = 6;
let answer;

if (x > 10) {
    answer = "greater than 10";
} else {
    answer =  "less than 10";
}

// shorthand ternary
answer = x > 10 ? "greater than 10" : "less than 10";
console.log(answer);

//nested condition
answer = x > 10 ? "greater than 10" : x < 5 ? "less than 5" : "between 5 and 10";
console.log(answer);

// Short-circuit Evaluation
// Longhand:
let variable1 = "something";
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
     let variable2 = variable1;
     console.log(variable2);
}

// Shorthand:
let variable4 = 0;
const variable3 = variable4  || 'new';
console.log(variable3);

// Declaring Variables javascript
// Longhand method:
let x;
let y;
let z = 3;

// Shorthand :
let x, y, z=3;

//If Presence Shorthand javascript
// Longhand:
if (likeJavaScript === true)

// Shorthand:
if (likeJavaScript)

// Longhand:
let a;
if ( a !== true ) {
// do something...
}

// Shorthand:
let a;
if ( !a ) {
// do something...
}


// for loop shorthand javascript
// Longhand:
const animals = ['Lion', 'Tiger', 'Giraffe'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

// Shorthand:
for (let animal of animals){
    console.log(animal);
}

// If you just wanted to access the index, do:
for (let index in animals){
  console.log(index);
}

// This also works if you want to access keys in a literal object:
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj)
  console.log(key) // output: continent, country, city
  
// Shorthand for Array.forEach:
function logArrayElements(element, index, array) {
  console.log(index + " = " + element);
}
["first", "second", "third"].forEach(logArrayElements);
// 0 = first
// 1 = second
// 2 = third

// Decimal Base Exponents shorthand javascript
// Longhand:
for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  
  // Shorthand:
  for (let i = 0; i <= 1e4; i++) {
    console.log(i);
  }
  // All the below will evaluate to true
  // 1e0 === 1;
  // 1e1 === 10;
  // 1e2 === 100;
  // 1e3 === 1000;
  // 1e4 === 10000;

// Object Property Shorthand javascript
// Longhand:
const x = 1920, y = 1080;
const obj1 = { x:x, y:y };
console.log(obj1) //{ x: 1920, y: 1080 }

// Shorthand:
const obj2 = { x, y };
console.log(obj2) // { x: 1920, y: 1080 }


// Arrow Functions Shorthand javascript
// Longhand:
function sayHello(name) {
    console.log('Hello', name);
  }
  
  setTimeout(function() {
    console.log('Loaded')
  }, 2000);
  
  list.forEach(function(item) {
    console.log(item);
  });
  
  // Shorthand:
  sayHello = name => console.log('Hello', name);
  
  setTimeout(() => console.log('Loaded'), 2000);
  
  list.forEach(item => console.log(item));

  // Arrow Functions Shorthand javascript
// Longhand:
function sayHello(name) {
    console.log('Hello', name);
  }
  sayHello("Chetan"); // Hello Chetan
  
  setTimeout(function() {
    console.log('Loaded'); //Loaded
  }, 2000);
  
  
  [1,2,3].forEach(function(item) {
    console.log(item);
  // 1
  // 2
  // 3
  });
  
  // Shorthand:
  sayHello = name => console.log('Hello', name);
  sayHello("Chetan"); //Hello Chetan
  
  setTimeout(() => console.log('Loaded'), 2000); //Loaded
  
  [1,2,3].forEach(item => console.log(item));
  // 1
  // 2
  // 3

// Function in JavaScript
function regular(){
    console.log("regular function");
  }
  regular(); //regular function
  
  // Arrow Function
  const arrow = () => {
    console.log("Arrow function");
  }
  arrow(); //Arrow function

// Implicit Return Shorthand in javascript
// Longhand:
function calcCircumference(diameter) {
    return Math.PI * diameter
  }
console.log(calcCircumference(10)); //31.41592653589793
  
// Shorthand:
calcCircumference_ = diameter => Math.PI * diameter
console.log(calcCircumference_(10)); //31.41592653589793

// Default Parameter Values in javascript
// Longhand:
function volume(l, w, h) {
    if (w === undefined)
      w = 3;
    if (h === undefined)
      h = 4;
    return l * w * h;
  }
  console.log(volume(2)); //output: 24
  
  // Shorthand:
  volume_ = (l, w = 3, h = 4 ) => (l * w * h);
  console.log(volume_(2)) //output: 24


  // next day date javascript
var tomorrowDate = new Date().getDate()+1;
console.log(tomorrowDate);

// reverse array elements in javascript
const arr = ["first", "second", "third"];
arr.reverse(); // Mutates the array
console.log(arr); // ["third", "second", "first"]

// Template Literals in javascript
// Longhand:
let firstName = "Chetan", lastName = "Nada";
const welcome = 'Hello my name is ' + firstName + ' ' + lastName;
console.log(welcome); //Hello my name is Chetan Nada

// Shorthand:
const welcome_ = `Hello my name is ${firstName} ${lastName}`;
console.log(welcome_); //Hello my name is Chetan Nada