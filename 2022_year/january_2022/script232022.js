// https://www.hackerrank.com/domains/algorithms

// Left Rotation
function rotateLeft(d, arr) {
  // Write your code here
  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
// Find Digits
function findDigits(n) {
  // Write your code here
  let splitDigits = n.toString().split("");
  let count = 0;
  for (let i = 0; i < splitDigits.length; i++) {
    if (n % parseInt(splitDigits[i]) === 0) {
      count++;
    }
  }
  return count;
}

// Append and Delete
function appendAndDelete(s, t, k) {
  let sArr = s.split("");
  let tArr = t.split("");
  let count = 0;
  for (let i = 0; i === count && i < s.length; i++) {
    if (sArr[i] === tArr[i]) {
      count++;
    }
  }
  let tMinusCount = t.length - count;
  let sMinusCount = s.length - count;
  let STK = k - (tMinusCount + sMinusCount);
  if (
    tMinusCount + sMinusCount < k &&
    t.length + s.length > k &&
    STK % 2 !== 0
  ) {
    return "No";
  } else if (tMinusCount + sMinusCount <= k) {
    return "Yes";
  } else {
    return "No";
  }
}

// find factors of a number in javascript
function factors(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(factors(147)); // [ 1, 3, 7, 21, 49, 147 ]

// find prime factors of a number in javascript
function primeFactors(n) {
  let arr = [];
  for (let i = 2; i <= n; ) {
    if (n % i === 0) {
      arr.push(i);
      n /= i;
      console.log(n);
    } else {
      i++;
    }
  }
  return arr;
}
console.log(primeFactors(147)); // [ 3, 7, 7 ]

// how to generate an array of random numbers in javascript
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
console.log(randomIntArrayInRange(5, 20, 6)); // [ 11, 7, 17, 13, 12, 16 ]

// how to get random value from array in javascript
const animals = [
  "Lion",
  "Tiger",
  "Shark",
  "Whale",
  "Snake",
  "Bear",
  "Crocodile",
  "Wolf",
  "Fox",
];
var randomAnimal = animals[Math.floor(Math.random() * animals.length)];
console.log(randomAnimal);

// how to get min value from array of objects in javascript
let arr = [
  {
    id: 5,
    name: "chetan",
  },
  {
    id: 2,
    name: "akash",
  },
  {
    id: 1,
    name: "ujesh",
  },
  {
    id: 4,
    name: "jeny",
  },
  {
    id: 3,
    name: "mayur",
  },
];
const result = (arr) => Math.min(...arr.map((val) => val.id));
console.log(result(arr)); // 1


// fibonacci series in javascript
const fibonacciSeries = (num) => {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (i == 0 || i == 1) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr;
};
console.log(fibonacciSeries(10));
//Output: [ 0, 1,  1,  2,  3,5, 8, 13, 21, 34, 55]


// how to find reverse of a number in javascript
const reverseNumber = n => 
  parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
console.log(reverseNumber(815)); //518
console.log(reverseNumber(-200)); // -2
console.log(reverseNumber(43.5)); // 5.34
console.log(reverseNumber(-3.62)); // -26.3

