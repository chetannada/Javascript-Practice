// https://www.hackerrank.com/domains/algorithms

// array manipulation hackerrank javascript
function arrayManipulation(n, queries) {
  // Write your code here
  const arr = Array(n + 1);
  let maxValue = 0,
    currentNumber = 0;
  queries.forEach(([startRange, endRange, value]) => {
    arr[startRange] = arr[startRange] || { start: 0, end: 0 };
    arr[endRange] = arr[endRange] || { start: 0, end: 0 };
    arr[startRange].start += value;
    arr[endRange].end += value;
  });
  arr.forEach((cell) => {
    if (cell) {
      currentNumber += cell.start;
      if (currentNumber > maxValue) {
        maxValue = currentNumber;
      }
      currentNumber -= cell.end;
    }
  });
  return maxValue;
}
