// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Breaking the Records
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
function breakingRecords(scores) {
    // Write your code here
    let highScore = scores[0];
    let lowScore = scores[0];
    let highCount = 0;
    let lowCount = 0;
    for(let i=1; i<scores.length; i++){
        if(scores[i] > highScore){
            highScore = scores[i];
            highCount++;
        }else if(scores[i] < lowScore){
            lowScore = scores[i];
            lowCount++;
        }
    }
    return [highCount, lowCount];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

// Subarray Division
function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let sum = 0;
    for(let i=0 ; i<s.length; i++){
        sum = s.slice(i, m + i).reduce((previous,current) => previous + current);
        if(sum === d){
            count++
        }
    }
    return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));

// Day 6: Let's Review
function processData(input) {
    //Enter your code here
    let stringLength = input.split('\n').slice(1);
    
    stringLength.forEach(str => {
        let even = [];
        let odd = [];
        for(let i=0; i<str.length; i++){
            if(i % 2 === 0){
                even.push(str[i]);
            }else{
                odd.push(str[i]);
            }
        }
        console.log(`${even.join("")} ${odd.join("")}`)
    })
} 
processData("2\nHacker\nRank");