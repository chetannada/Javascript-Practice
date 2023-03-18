// Count number of occurrences for each char in a string with JavaScript

const str = "Chetan Nada";
const arr = str
  .toLowerCase() // converting into lowercase
  .split("") // conver string into array
  .filter((item) => item != " "); // remove the space using filter

const countedChar = arr.reduce((allChar, name) => {
  const currCount = allChar[name] ?? 0; // used nullish coalescing operator ?? (if left-hand side is null or undefined , then returns its right-hand side operand )
  return {
    ...allChar,
    [name]: currCount + 1,
  };
}, {});
console.log(countedChar); // Output: { c: 1, h: 1, e: 1, t: 1, a: 3, n: 2, d: 1 }
