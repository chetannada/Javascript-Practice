// https://www.hackerrank.com/domains/algorithms

// Circular Array Rotation
function circularArrayRotation(a, k, queries) {
  // Write your code here
  for(let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  let arr = [];
  for(let j = 0; j < queries.length; j++) {
    arr.push(a[queries[j]]);
  }
  return arr;
}
