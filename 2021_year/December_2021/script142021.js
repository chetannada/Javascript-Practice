// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 0: Hello, World.
function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    console.log(inputString);
    // Write the second line of output that prints the contents of 'inputString' here.
}
processData("Welcome to 30 Days of Code!");


// Random Challange
// Right aligned Staircase in Hackerrank
function staircase(n) {
    // Write your code here
    let string = "";
    for(let i=1; i<=n; i++){
        for(let j=1; j<= n-i; j++){
            string += " ";
        }
        for(let k=1; k<=i; k++){
            string += "#";
        }
        string += "\n";
    }
    return console.log(string);
}
staircase(5);

// Solve Me First Problem Solving
// https://www.hackerrank.com/domains/algorithms
function solveMeFirst(a, b) {
    // Hint: Type return a+b below
    return a + b;
  }
console.log(solveMeFirst(5,4));

// Simple Array Sum
function simpleArraySum(ar) {
    // Write your code here
    let sumArray = 0;
    for(let i = 0; i<ar.length; i++){
        sumArray += ar[i];
    }
    return sumArray;
}
console.log(simpleArraySum([1,2,3,4,5]));

// Compare the Triplets
function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0;
    for(let i=0; i<a.length; i++){
        if(a[i] > b[i]){
            alice += 1;
        } else if(a[i] < b[i]){
            bob += 1;
        }
    }
    return [alice, bob];
}
console.log(compareTriplets([5,6,7],[3,6,10]));

// A Very Big Sum
function aVeryBigSum(ar) {
    // Write your code here
    let bigSum = 0;
    for(let i=0; i<ar.length; i++){
        bigSum += ar[i];
    }
    return bigSum;
}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

// Diagonal Difference
function diagonalDifference(arr) {
    // Write your code here
    let leftToRightDiag = 0;
    let rightToLeftDiag = 0;
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i === j){
                leftToRightDiag += arr[i][j];
            }
            if(i + j === arr.length - 1){
                rightToLeftDiag += arr[i][j];
            }
        }
    }
    return Math.abs(leftToRightDiag - rightToLeftDiag);
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));