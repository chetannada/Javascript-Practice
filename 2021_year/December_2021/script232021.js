// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Drawing Book
function pageCount(n, p) {
    // Write your code here
  let startCount = 0;
  let endCount = 0;
  for(let i = 1; i<p; i++){
    if(i % 2 !== 0){
      startCount++;
    }
  }
  for(let j = n; j>p; j--){
    if(j % 2 === 0){
      endCount++;
    }
  }
  if(startCount > endCount){
    return endCount;
  }else {
    return startCount;
  }
}
console.log(pageCount(10, 4));

// Day 9: Recursion 3
function factorial(n) {
  // Write your code here
  if(n<=1){
      return 1;
  }else{
      return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// Counting Valleys
function countingValleys(steps, path) {
  // Write your code here
  let count = 0;
  let altitude = 0;
  for(let i=0; i<steps; i++){
      if((path[i] == "U")){
        altitude++;
          if(altitude === 0){
            count++;
          }
      }else{
        altitude--;
      }
  }
  return count;
}
console.log(countingValleys(7, 'DDUUUDD'));