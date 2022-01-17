// https://www.hackerrank.com/domains/algorithms

// Save the Prisoner!
function saveThePrisoner(n, m, s) {
    // Write your code here
      let last = 0;
      last = (m + s - 1) % n;
      if (last === 0) {
        last = n;
      }
    return last;
  }
console.log(saveThePrisoner(4,6,3));