// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Picking Numbers
function pickingNumbers(a) {
    // Write your code here
    let sorted = a.sort(function(a, b) {
        return a - b;
    });
    
    let i = 0;
    let j = 1;
    
    while(i < sorted.length && j < sorted.length) {
        if(Math.abs(sorted[i] - sorted[j]) > 1) {
            i++;
            j++;
        } else {
            j++;
        }
    }
   
    return Math.abs(i - j);
}

// The Hurdle Race
function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max(...height);
    console.log(max);
    if((max - k) > 0){
        return (max - k);
    }else{
        return 0;
    }
}

// Day 17: More Exceptions
class Calculator {
    
    power(n,p){
        try{
           if((n>=0) && (p>=0)){
               return Math.pow(n,p);
           }else{
               error;
           }
            
        }
        catch(error){
            return "n and p should be non-negative";
        } 
    }
}