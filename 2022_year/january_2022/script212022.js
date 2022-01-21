// https://www.hackerrank.com/domains/algorithms

// Arrays - DS
function reverseArray(a) {
  // Write your code here
  return a.reverse();
}


// 2D Array - DS
function hourglassSum(arr) {
  // Write your code here
  let maxArr = [];
  for(let i=0; i<=3; i++){
      for(let j=0; j<=3; j++){
          // sum the top of hourglass
          let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]; 
          
          // sum the middle of hourglass
          sum += arr[i+1][j+1]; 
          
          // sum the bottom of hourglass
          sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
          
          // push your sum to array
          maxArr.push(sum);
      }
  }
  return Math.max(...maxArr);
}