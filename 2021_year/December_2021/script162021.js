// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Time Conversion
// Algorithms challenge
function timeConversion(s) {
    // Write your code here
    let inputArray = s.split(':');
    let hours = parseInt(inputArray[0]);
    let minutes = inputArray[1];
    let timeFrame = inputArray[2].slice(2)
    let seconds = inputArray[2].slice(0,2);
    if((timeFrame === "PM") && (hours !== 12)){
        hours += 12;
    }
    if((timeFrame === "AM") && (hours === 12)){
        hours = "00";
    }else if(hours < 10){
        hours = "0" + hours.toString();
    }else{
        hours = hours.toString();
    }
    console.log([hours,minutes,seconds].join(":"));
}
timeConversion("12:05:45AM");


// Day 2: Operators
function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = (tip_percent/100)* meal_cost;
    let tax = (tax_percent/100) * meal_cost;
    let totalSum = meal_cost + tip + tax;
    console.log(Math.round(totalSum));
}
solve(12.00, 20, 8);