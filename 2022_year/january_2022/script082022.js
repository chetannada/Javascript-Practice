// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// how to remove duplicates from array in javascript
// 1. filter()
let num = [1, 2, 3, 3, 4, 4, 5, 5, 6];
let filtered = num.filter((a, b) => num.indexOf(a) === b);
console.log(filtered);
// Result: [ 1, 2, 3, 4, 5, 6 ]

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// Result: [ 1, 2, 3, 4, 5, 6 ]

// Check the value is Array or not
const str = "foo";
const check = Array.isArray(str);
console.log(check);
// Result: false

const arr = [1, 2, 3, 4];
const output = Array.isArray(arr);
console.log(output);
// Result: true

// how to check all values of an array are equal or not in javascript
const allEqual = (arr) => arr.every((val) => val === arr[0]);
console.log(allEqual([1, 2, 3, 4, 5, 6])); // false
console.log(allEqual([1, 1, 1, 1])); // true

// how to find last element in array in javascript
// 1. Array.prototype.length
const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);
// Result: 5

// 2. Array.prototype.slice()
const last = arr.slice(-1);
console.log(+last);
// Result: 5

// how to create a slice of the array with n elements taken from the beginning in javascript
const take = (arr, n) => arr.slice(0, n);
console.log(take([1, 2, 3], 2)); // [1, 2]
console.log(take([1, 2, 3], 0)); // []

// how to copy all elements in an array except for the first one in javascript
const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);
console.log(tail([1, 2, 3])); // [2, 3]
console.log(tail([1])); // [1]

// how to check provided value is in array in javascript
const is = (type, val) => val.constructor === Array;
console.log(is(Array, [1])); // true
console.log(is(Array, 1)); // false

// how to Initialize and fill an array with the specified values in javascript
const initializeArrayWithValues = (n, val) =>
  Array.from({ length: n }).fill(val);
console.log(initializeArrayWithValues(4, 9)); // [ 9, 9, 9, 9 ]

// how to copy all the elements of an array except the last one in javascript
const initial = (arr) => arr.slice(0, -1);
console.log(initial([1, 2, 3])); // [1, 2]

// How to select all other values in an array except the ith element in Javascript
// Remove first index element
let orignalArray = [0,1,2,3,4,5];
let cloneArray = orignalArray.slice();
let i = 1;
cloneArray.splice(i,1);
console.log(cloneArray);
// Result: [ 0, 2, 3, 4, 5 ]

// day 25 running time and complexity hackerrank solution javascript
function processData(input) {
  //Enter your code here
  input.split('\n').slice(1).map((n, i) => {
      console.log(isPrime(n) ? 'Prime' : 'Not prime');
  });

  function isPrime(n) {
      if (n == 1) return false;

      for (let i = 2; i * i <= n; i++) {
          if (n % i == 0) return false;
      }

      return true;
  }
}