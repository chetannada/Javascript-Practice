// https://www.hackerrank.com/domains/algorithms

// Multi-line String Shorthand
// Longhand:
const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
    + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
    + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
    + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
    + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
    + 'irure dolor in reprehenderit in voluptate velit esse.\n\t'
console.log(lorem);

// Shorthand: use backtick
const lorem_ = `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.`
console.log(lorem_);


// Spread Operator Shorthand
// Longhand
// joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);
console.log(nums); // [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice()
console.log(arr2); // [ 1, 2, 3, 4 ]

// Shorthand: 
// joining arrays
const odd_ = [1, 3, 5 ];
const nums_ = [2 ,4 , 6, ...odd_]; //spread operator is simply a series of three dots.
console.log(nums_); // [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const arr_ = [1, 2, 3, 4];
const arr2_ = [...arr_];
console.log(arr2_); // [ 1, 2, 3, 4 ]

// Unlike the concat() function, you can use the spread operator to insert an array anywhere inside another array.
const odd__ = [1, 3, 5 ];
const nums__ = [2, ...odd__, 4 , 6];
console.log(nums__); // [ 2, 1, 3, 5, 4, 6 ]

// You can also combine the spread operator with ES6 destructuring notation:
const { a, b, ...z } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a) // 1
console.log(b) // 2
console.log(z) // { c: 3, d: 4 }


// Mandatory Parameter Shorthand
// Longhand:
function foo(bar) {
    if(bar === undefined) {
      return ('Missing parameter!');
    }
    return bar;
  }
  console.log(foo());
  
  
  // Shorthand:
  mandatory = () => {
    return ('Missing parameter!');
  }
  foo_ = (bar = mandatory()) => {
    return bar;
  }
  console.log(foo_());


// Array.find Shorthand javascript
// Longhand:
const pets = [
    { type: 'Dog', name: 'Max'},
    { type: 'Cat', name: 'Karl'},
    { type: 'Dog', name: 'Tommy'},
  ]
  
  function findDog(name) {
    for(let i = 0; i<pets.length; i++) {
      if(pets[i].type === 'Dog' && pets[i].name === name) {
        return pets[i];
      }
    }
  }
  console.log(findDog("Tommy")); // { type: 'Dog', name: 'Tommy' }
  
  
  // Shorthand:
  const findDog_ = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
  console.log(findDog_); // { type: 'Dog', name: 'Tommy' }


// Double Bitwise NOT Shorthand
// Longhand:
console.log(Math.floor(4.9) === 4)  //true

// Shorthand:
console.log(~~4.9 === 4)  //true


// Exponent Power Shorthand in javascript
// Longhand:
console.log(Math.pow(2,3)); // 8
console.log(Math.pow(2,2)); // 4
console.log(Math.pow(4,3)); // 64

// Shorthand:
console.log(2**3); // 8
console.log(2**4); // 4
console.log(4**3); // 64


// Converting a String into a Number in Javascript
// Longhand:
const num1 = parseInt("100");
const num2 =  parseFloat("100.01");
console.log(num1);
console.log(num2);

// Shorthand:
const num3 = +"100"; // converts to int data type
const num4 =  +"100.01"; // converts to float data type
console.log(num3);
console.log(num4);


// Object assign in javascript
let fname = { firstName : 'Black' };
let lname = { lastName : 'Panther'}
let full_names = Object.assign(fname, lname);
console.log(full_names); //{ firstName: 'Black', lastName: 'Panther' }


// Bitwise IndexOf Shorthand
// Longhand:
if(arr.indexOf(item) > -1) { 
  // Confirm item IS found
}

if(arr.indexOf(item) === -1) { 
  // Confirm item IS NOT found
}

// Shorthand:
if(~arr.indexOf(item)) { 
  // Confirm item IS found
}

if(!~arr.indexOf(item)) { 
  // Confirm item IS NOT found
}

// we can also use the includes() function:
if(arr.includes(item)) { 
  // Returns true if the item exists, false if it doesn't
}


// Object.entries() in javascript
const credits = { producer: 'John', director: 'Jane', assistant: 'Peter' };
const arr = Object.entries(credits);
console.log(arr);

/** Output:
[ [ 'producer', 'John' ],
  [ 'director', 'Jane' ],
  [ 'assistant', 'Peter' ]
]
**/

// how to convert object to array in javascript
// Object.entries()
const credits = { producer: 'John', director: 'Jane', assistant: 'Peter' };
const arr = Object.entries(credits);
console.log(arr);

/** Output:
[ [ 'producer', 'John' ],
  [ 'director', 'Jane' ],
  [ 'assistant', 'Peter' ]
]
**/
// convert to values array
// Object.values()
console.log(Object.values(credits));
// [ 'John', 'Jane', 'Peter' ]


