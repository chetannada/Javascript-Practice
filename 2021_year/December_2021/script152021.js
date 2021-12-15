// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 1: Data Types
function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    var secondInteger = parseInt(readLine());
    var secondFloat = parseFloat(readLine());
    var secondString = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(secondInteger + i);
    // Print the sum of the double variables on a new line.
    console.log((secondFloat + d).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}


// Plus Minus
// Algorithms challenge
function plusMinus(arr) {
    // Write your code here
    let arrLength = arr.length;
    let arrPos = [];
    let arrNeg = [];
    let arrZero = [];
    for(let i=0; i<arrLength; i++){
        if(arr[i] > 0){
            arrPos.push(arr[i]);
        }else if(arr[i] <0){
            arrNeg.push(arr[i]);
        }else{
            arrZero.push(arr[i]);
        }    
    }
    console.log((arrPos.length /arrLength).toFixed(6));
    console.log((arrNeg.length /arrLength).toFixed(6));
    console.log((arrZero.length /arrLength).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);

// Mini-Max Sum
// Algorithms challenge
function miniMaxSum(arr) {
    // Write your code here
    let minMaxArray = [];
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum += arr[i];
    }
    for(let j=0 ; j<arr.length; j++){
        minMaxArray.push(sum - arr[j]);
    }
    const max = minMaxArray.reduce((a,b) => Math.max(a,b));
    const min = minMaxArray.reduce((a,b) => Math.min(a,b));
    console.log(min + " " + max);
}
miniMaxSum([1,8, 3, 4, 7]);

// Birthday Cake Candles
// Algorithms challenge
function birthdayCakeCandles(candles) {
    // Write your code here
    const max = candles.reduce((a,b) => Math.max(a,b));
    let sum = 0;
    for(let i=0; i<candles.length; i++){
        if(max === candles[i]){
            sum += 1;
        }
    }
    return sum;
}
console.log(birthdayCakeCandles([3, 2, 1, 3, 5, 5, 5, 7, 7, 7, 7]));