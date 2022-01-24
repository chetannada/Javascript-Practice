// https://www.hackerrank.com/domains/algorithms

// Sum of all the digits of a number in Javascript
const num = 1245,
    sum = num
        .toString()
        .split('')
        .map(Number)
        .reduce((a,b) => a + b);
console.log(sum); // 12