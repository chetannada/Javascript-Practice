// https://www.hackerrank.com/domains/algorithms

// Sequence Equation
function permutationEquation(p) {
  // Write your code here
  let arr = [];
  let index = 0;
  let value = 0;
  for (let i = 1; i <= p.length; i++) {
    index = p.findIndex((item) => item == i);
    value = p.indexOf(index + 1) + 1;
    arr.push(value);
  }
  return arr;
}
console.log(permutationEquation([4, 3, 5, 1, 2]));
