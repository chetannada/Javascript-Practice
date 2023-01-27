// for in and for of loop in array
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

// how to remove duplicates from array in javascript
// 1. filter()
let num = [1, 2, 3, 3, 4, 4, 5, 5, 6];
let filtered = num.filter((a, b) => num.indexOf(a) === b)
console.log(filtered);
// Result: [ 1, 2, 3, 4, 5, 6 ]

// 2. Set()
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates(num));
// Result: [ 1, 2, 3, 4, 5, 6 ]